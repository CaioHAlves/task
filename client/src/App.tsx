import { IconButton } from "@material-ui/core"
import { CheckCircle } from "@material-ui/icons"
import { useEffect, useState, ChangeEvent } from "react"
import { getTasks } from "./api/getTask"
import * as S from './styles'
import { TextField } from "@material-ui/core"
import { ListTasks } from "./components/listTasks"
import { patchTasks } from "./api/patchTask"
import { deleteTask } from "./api/deleteTask"
import { postTasks } from "./api/postTask"

type Tasks = Array<{
  titulo: string
  concluida: boolean
  id: string
}>

interface IStateTasks {
  items: Tasks
  totalPages: number
  totalItems: number
}

function App() {

  const [tasks, setTasks] = useState<IStateTasks>({ items: [], totalItems: 0, totalPages: 0 })
  const [newTask, setNewTask] = useState("")
  const [page, setPage] = useState(1)
  const [hasMoreItems, setHasMoreItems] = useState(true)

  useEffect(() => {
    getTasks(1)
      .then(response => {
        setTasks(response.data)

        if (response.data.totalPages <= 1) {
          setHasMoreItems(false)
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleChangeStatus = (id: string, titulo: string, concluida: boolean) => {
    patchTasks(id, titulo, !concluida)
      .then(() => {
        const updateTasks = tasks.items.map(item => {
          if (item.id === id) {
            return { ...item, concluida: !item.concluida }
          }
    
          return item
        })
    
        setTasks({ ...tasks, items: updateTasks })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const handleDeleteTaks = (id: string) => {
    deleteTask(id)
      .then(() => {
        const updateTask = tasks.items.filter(item => item.id !== id)
    
        setTasks({ ...tasks, items: updateTask, totalItems: tasks.items.length - 1 })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const createTask = () => {
    if (!newTask) {
      alert("Preencha o campo antes de continuar!")
    } else {
      postTasks(newTask)
        .then(response => {
          const newTasks = tasks.items.concat(response.data)
          setTasks({ ...tasks, items: newTasks })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  const handleLoadMoreItems = () => {
    if (page <= tasks.totalPages) {
      setHasMoreItems(false)

      getTasks(page+1)
      .then(response => {
        const { items, totalPages } = response.data

        if (page !== totalPages) {
          setHasMoreItems(true)
          setTasks({ ...tasks, items: tasks.items.concat(items) })
          setPage(page+1)
        } else {
          setHasMoreItems(false)
        }
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  }

  return (
    <S.Container>
      <S.Actions>
        <TextField 
          variant="outlined"
          size="small"
          label="New task"
          color="primary"
          value={newTask}
          onChange={handleChange}
        />
        <IconButton color="primary" onClick={createTask}>
          <CheckCircle />
        </IconButton>
      </S.Actions>
      <ListTasks 
        tasks={tasks}
        changeStatus={handleChangeStatus}
        deleteTask={handleDeleteTaks}
        hasMore={hasMoreItems}
        loadMore={handleLoadMoreItems}
      />
    </S.Container>
  )
}

export default App
