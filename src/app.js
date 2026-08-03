import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import notesRouter from './routes/notes.routes.js'
import subNotesRouter from './routes/subNotes.routes.js'
import userRouter from './routes/user.routes.js'
import subTaskRouter from './routes/subTasks.routes.js'
import taskRouter from './routes/tasks.routes.js'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

export default app

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit: "16kb", extended: true}))
app.use(express.static("public"))

// Manipulate Notes
app.use("/api/notes", notesRouter)
// app.use("/api/getNotes", notesRouter)
// app.use("/api/getAllNotesbyId", notesRouter)

// Manipulate SubNotes
app.use("/api/subNotes", subNotesRouter)

// Manipulate Users
app.use("/api/user", userRouter)

// Manipulate SubTasks
app.use("/api/subTasks", subTaskRouter)

// Manipulate Tasks
app.use("/api/task", taskRouter)