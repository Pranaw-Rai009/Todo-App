import {Router} from 'express'
import {createSubNotes, getAllSubNotes, getSubNotesById, deleteSubNotesById, updateSubNotesById} from '../controllers/subNotes.controllers.js'
import {authAccesToken} from '../middlewares/auth.middleware.js'
const router = Router()

router.post("/create", authAccesToken,createSubNotes)
router.get("/list", authAccesToken,getAllSubNotes)
router.get("/getNotes/:id", authAccesToken,getSubNotesById)
router.delete("/delete/:id",authAccesToken, deleteSubNotesById)
router.patch("/update/:id",authAccesToken, updateSubNotesById)
export default router