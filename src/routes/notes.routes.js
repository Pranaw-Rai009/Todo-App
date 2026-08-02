import {Router} from 'express'
import {createNotes, getAllNotes, getAllNotesbyId, deleteNotesbyId} from '../controllers/notes.controllers.js'

const router = Router()

// Manipulate Notes
router.post("/", createNotes)

router.get("/", getAllNotes)

// :id in the path is a placeholder
router.get("/:id", getAllNotesbyId)

router.delete("/:id", deleteNotesbyId)

export default router