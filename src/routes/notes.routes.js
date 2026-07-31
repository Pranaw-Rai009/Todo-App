import {Router} from 'express'
import {createNote} from '../controllers/notes.controllers.js'

const router = Router()

router.post("/", createNote)

export default router