import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import notesRouter from './routes/notes.routes.js'

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

const app = express()
export default app

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit: "16kb", extended: true}))
app.use(express.static("public"))

app.use("/api/notes", notesRouter)