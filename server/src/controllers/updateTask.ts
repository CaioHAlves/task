import { Request, Response } from 'express'
import { Task } from '../models/task'

export class UpdateTasks {
  static async update(req: Request, res: Response) {
    const { id } = req.params
    const { titulo, concluida } = req.body
    
    if (!id) {
      return res.status(422).json({
        message: "Não foi possivel realizar as alterações"
      })
    }

    Task.findByIdAndUpdate({ _id: id }, { titulo, concluida })
      .then(() => {
        return res.status(201).json({
          message: "Tarefa alterada com sucesso!"
        })
      })
      .catch(error => {
        return res.status(422).json({
          error,
          message: "Erro ao tentar alterar a tarefa!"
        })
      })
  }
}