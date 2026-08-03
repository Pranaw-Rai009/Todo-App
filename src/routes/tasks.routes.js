import { Router } from "express";
import {createTask, getTaskById, getAllTask, deleteTaskbyId} from '../controllers/task.controlles.js'

const router = Router();

router.post("/create", createTask)
router.get("/list/:id", getTaskById)
router.get("/listAll", getAllTask)
router.delete("/delete/:id", deleteTaskbyId)

export default router