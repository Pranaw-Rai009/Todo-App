import {Router} from 'express'
import {createSubNotes, getAllSubNotes, getSubNotesById, deleteSubNotesById, updateSubNotesById} from '../controllers/subNotes.controllers.js'
import {authAccesToken} from '../middlewares/auth.middleware.js'
import {isNoteOwner} from '../middlewares/noteOwnerCheck.middleware.js'

const router = Router()

router.post("/create",isNoteOwner, authAccesToken,createSubNotes)
router.get("/list", isNoteOwner,authAccesToken,getAllSubNotes)
router.get("/getNotes/:id", isNoteOwner,authAccesToken,getSubNotesById)
router.delete("/delete/:id",isNoteOwner,authAccesToken, deleteSubNotesById)
router.patch("/update/:id",isNoteOwner,authAccesToken, updateSubNotesById)
export default router