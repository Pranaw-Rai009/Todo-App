import {Router} from 'express'
import {createSubNotes, getAllSubNotes, getSubNotesById} from '../controllers/subNotes.controllers.js'

const router = Router()

router.post("/", createSubNotes)
router.get("/", getAllSubNotes)
router.get("/:id", getSubNotesById)
export default router