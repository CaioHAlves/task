import { IconButton, Checkbox } from '@material-ui/core'
import InfiniteScroll from "react-infinite-scroller"
import { Delete } from '@material-ui/icons'
import * as S from './styles'

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

interface Props {
  tasks: IStateTasks
  changeStatus: (id: string, titulo: string, concluida: boolean) => void
  deleteTask: (id: string) => void
  loadMore: () => void
  hasMore: boolean
}

export function ListTasks({ tasks, changeStatus, deleteTask, hasMore, loadMore }: Props) {

  return (
    <S.List>
      <InfiniteScroll
        initialLoad={false}
        loadMore={loadMore}
        loader={<div>Carregando</div>}
        hasMore={hasMore}
        useWindow={false}
        className='infinite-scroll'
      >
        {tasks.items.map((item, index) => (
          <li key={index}>
            <p>{item.titulo}</p>
            <div>
              <IconButton onClick={() => deleteTask(item.id)} color="secondary">
                <Delete />
              </IconButton>
              <Checkbox 
                checked={item.concluida}
                value={item.concluida}
                color="primary"
                onChange={() => changeStatus(item.id, item.titulo, item.concluida)}
              />
            </div>
          </li>
        ))}
      </InfiniteScroll>
    </S.List>
  )
}