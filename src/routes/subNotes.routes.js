import {Router} from 'express'
import {createSubNotes, getAllSubNotes, getSubNotesById, deleteSubNotesById} from '../controllers/subNotes.controllers.js'

const router = Router()

router.post("/create", createSubNotes)
router.get("/list", getAllSubNotes)
router.get("/getNotes/:id", getSubNotesById)
router.delete("/delete/:id", deleteSubNotesById)
export default router