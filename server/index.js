import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'

import {fireabseapp} from './firebase/fireabase_config.js'
import cors from 'cors'


dotenv.config()

const app=express()


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongo')
})

const PORT=process.env.PORT||4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {
        origin:'https://tapop-assignment-rho.vercel.app/'
    }
))

app.use('/api/auth',authRoutes)
app.use('/uploads',express.static('uploads'))



app.listen(PORT,()=>{
    console.log('server is running',PORT)
})


