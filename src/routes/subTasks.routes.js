import {Router} from 'express'
import {createSubTask, getAllSubTask, getSubTaskById, deleteSubTaskById, updateSubTaskById} from '../controllers/subTask.controllers.js'

const router = Router()

router.post("/", createSubTask)
router.get("/list", getAllSubTask)
router.get("/listbyId/:id", getSubTaskById)
router.delete("/delete/:id", deleteSubTaskById)
router.patch("/update/:id", updateSubTaskById)

export default router