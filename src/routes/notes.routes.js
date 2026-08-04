import {Router} from 'express'
import {createNotes, getAllNotes, getAllNotesbyId, deleteNotesbyId, updateNoteById} from '../controllers/notes.controllers.js'

const router = Router()

// Manipulate Notes
router.post("/create", createNotes)
router.get("/getNotes", getAllNotes)
// :id in the path is a placeholder
router.get("/getNotes/:id", getAllNotesbyId)
router.delete("/delete/:id", deleteNotesbyId)
router.patch("/updateNote/:id", updateNoteById)

export default router