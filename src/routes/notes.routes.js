import {Router} from 'express'
import {createNotes, getAllNotes} from '../controllers/notes.controllers.js'

const router = Router()

router.post("/", createNotes)

router.get("/", getAllNotes)

export default router