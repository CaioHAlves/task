import { Request, Response } from 'express'
import { Task } from '../models/task'

export class TaskCreate {
  static async create(req: Request, res: Response) {
    const { titulo } = req.body

    Task.create({
      titulo, concluida: false
    })
      .then((response) => {
        return res.status(200).json({
          titulo, concluida: false, id: response._id
        })
      })
      .catch((error) => {
        return res.status(422).json({
          error,
          message: "Erro ao criar tarefa!"
        })
      })
  }
}