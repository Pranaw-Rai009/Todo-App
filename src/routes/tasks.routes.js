import { Router } from "express";
import {createTask, getTaskById, getAllTask, deleteTaskbyId, updateTaskById} from '../controllers/task.controlles.js'

const router = Router();

router.post("/create", createTask)
router.get("/list/:id", getTaskById)
router.get("/listAll", getAllTask)
router.delete("/delete/:id", deleteTaskbyId)
router.patch("/update/:id", updateTaskById)

export default router