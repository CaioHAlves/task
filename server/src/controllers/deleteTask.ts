import { Request, Response } from 'express'
import { Task } from '../models/task'

export class DeleteTasks {
  static async delete(req: Request, res: Response) {
    const { id } = req.params

    Task.findByIdAndDelete(id)
      .then(() => {
        return res.status(200).json({
          message: "Tarefa deletada com sucesso!"
        })
      })
      .catch(error => {
        return res.status(422).json({
          error,
          message: "Erro ao deletar tarefa"
        })
      })
  }
}