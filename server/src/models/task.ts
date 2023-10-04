import mongoose from '../db/conn'

const { Schema } = mongoose

export const Task = mongoose.model(
  "Tasks",
  new Schema({
    titulo: {
      type: String,
      required: true
    },
    concluida: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: false }
  )
)