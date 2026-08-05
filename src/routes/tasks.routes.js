import { Router } from "express";
import {createTask, getTaskById, getAllTask, deleteTaskbyId, updateTaskById} from '../controllers/task.controlles.js'
import {authAccesToken} from '../middlewares/auth.middleware.js'
const router = Router();

router.post("/create", authAccesToken,createTask)
router.get("/list/:id", authAccesToken,getTaskById)
router.get("/listAll", authAccesToken,getAllTask)
router.delete("/delete/:id", authAccesToken,deleteTaskbyId)
router.patch("/update/:id", authAccesToken,updateTaskById)

export default router