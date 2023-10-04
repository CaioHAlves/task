import { Request, Response } from 'express'
import { Task } from '../models/task'

export class GetTasks {
  static async get(req: Request, res: Response) {
    const { page, limit } = req.query

    const pageForApi = page || 1
    const limitForApi = Number(limit!) * 1 || 5
    const skip = limitForApi * (Number(pageForApi!) - 1)

    Task.find()
      .then((response) => {
        const tasksPaginated = response.map(task => ({
          titulo: task.titulo,
          concluida: task.concluida,
          id: task._id
        }))

        return res.status(200).json({
          items: tasksPaginated.slice(skip, skip + limitForApi),
          totalPages: Math.ceil(tasksPaginated.length / limitForApi),
          totalItems: tasksPaginated.length
        })
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Não foi possivel carregar os registros!"
        })
      })
  }
}