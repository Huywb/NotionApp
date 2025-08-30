import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import { connectDB } from './config/connectDB.js'
import NoteRouter from './router/Note.js'



const app = express()
config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000

connectDB()
app.use("/api/notes",NoteRouter)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})


