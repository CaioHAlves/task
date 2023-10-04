import express from 'express'
import cors from 'cors'

import TasksRoutes from './routes/TasksRoutes'

const port = Number(process.env.PORT!)

const app = express()

app.use(express.json())
app.use(cors({
  origin: "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  credentials: true
}))

app.use("/tasks", TasksRoutes)

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});