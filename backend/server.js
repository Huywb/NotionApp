import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'



const app = express()
config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000

app.get("/api/notes",(req,res)=>{
    res.status(200).json({success:true,message:"Get all notes success"})
})



app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})


