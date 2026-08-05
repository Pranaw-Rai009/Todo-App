import {Router} from 'express'
import {createSubTask, getAllSubTask, getSubTaskById, deleteSubTaskById, updateSubTaskById} from '../controllers/subTask.controllers.js'
import {authAccesToken} from '../middlewares/auth.middleware.js'
const router = Router()

router.post("/", authAccesToken,createSubTask)
router.get("/list", authAccesToken,getAllSubTask)
router.get("/listbyId/:id", authAccesToken,getSubTaskById)
router.delete("/delete/:id", authAccesToken,deleteSubTaskById)
router.patch("/update/:id", authAccesToken,updateSubTaskById)

export default router