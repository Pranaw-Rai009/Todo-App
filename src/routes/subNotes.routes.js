import {Router} from 'express'
import {createSubNotes, getAllSubNotes, getSubNotesById, deleteSubNotesById, updateSubNotesById} from '../controllers/subNotes.controllers.js'

const router = Router()

router.post("/create", createSubNotes)
router.get("/list", getAllSubNotes)
router.get("/getNotes/:id", getSubNotesById)
router.delete("/delete/:id", deleteSubNotesById)
router.patch("/update/:id", updateSubNotesById)
export default router