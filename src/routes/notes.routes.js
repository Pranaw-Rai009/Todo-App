import {Router} from 'express'
import {createNotes, getAllNotes, getAllNotesbyId, deleteNotesbyId, updateNoteById} from '../controllers/notes.controllers.js'
import {authAccesToken} from '../middlewares/auth.middleware.js'
const router = Router()

// Manipulate Notes
router.post("/create", authAccesToken, createNotes)
router.get("/getNotes", authAccesToken, getAllNotes)
// :id in the path is a placeholder
router.get("/getNotes/:id", authAccesToken, getAllNotesbyId)

// middlewaare and constroller
router.delete("/delete/:id", authAccesToken, deleteNotesbyId)
router.patch("/updateNote/:id",authAccesToken,  updateNoteById)

export default router