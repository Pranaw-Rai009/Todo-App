import {Router} from 'express'
import {createNotes, getAllNotes, getAllNotesbyId, deleteNotesbyId, updateNoteById} from '../controllers/notes.controllers.js'
import {authAccesToken} from '../middlewares/auth.middleware.js'
import {isNoteOwner} from '../middlewares/noteOwnerCheck.middleware.js'
const router = Router()

// Manipulate Notes
router.post("/create", authAccesToken, isNoteOwner,createNotes)


router.get("/getNotes", authAccesToken, isNoteOwner,getAllNotes)
// :id in the path is a placeholder
router.get("/getNotes/:id", authAccesToken,isNoteOwner, getAllNotesbyId)

// middlewaare and constroller
router.delete("/delete/:id", authAccesToken, isNoteOwner, deleteNotesbyId)
router.patch("/updateNote/:id",authAccesToken,isNoteOwner,  updateNoteById)

export default router