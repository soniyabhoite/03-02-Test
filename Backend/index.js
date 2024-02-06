import express from 'express'
import AllRoute from './routes/index.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
const app=express()
app.use(express.json())
dotenv.config()
app.use(cors())

app.get('/',(req,res)=>{
    res.send("welcome")
})

app.use('/api',AllRoute)
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected.")
})

app.listen(5000,()=>{console.log("server started on port 5000")})