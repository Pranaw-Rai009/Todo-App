import {Router} from 'express'
import {createSubNotes, getAllSubNotes, getSubNotesById, deleteSubNotesById} from '../controllers/subNotes.controllers.js'

const router = Router()

router.post("/", createSubNotes)
router.get("/", getAllSubNotes)
router.get("/:id", getSubNotesById)
router.delete("/:id", deleteSubNotesById)
export default router