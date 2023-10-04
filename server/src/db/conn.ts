import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

function connectDataBase() {
  const mongoAtlasUri = process.env.MONGO_URI;

  mongoose.set("strictQuery", true)

  mongoose.connect(mongoAtlasUri!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATA_BASE
  } as ConnectOptions)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log('Error connect to MongoDB', error)
    })
}

connectDataBase();

export default mongoose