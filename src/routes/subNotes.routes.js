import {Router} from 'express'
import {createSubNotes, getAllSubNotes} from '../controllers/subNotes.controllers.js'

const router = Router()

router.post("/", createSubNotes)
router.get("/", getAllSubNotes)
export default router