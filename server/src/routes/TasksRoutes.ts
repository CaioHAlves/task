import { Router } from 'express'

import { TaskCreate } from '../controllers/postTasks'
import { GetTasks } from '../controllers/getTasks'
import { DeleteTasks } from '../controllers/deleteTask'
import { UpdateTasks } from '../controllers/updateTask'

const router = Router()

router.post("/create", TaskCreate.create)
router.get("/get", GetTasks.get)
router.delete("/delete/:id", DeleteTasks.delete)
router.patch("/update/:id", UpdateTasks.update)

export default router