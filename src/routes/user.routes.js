import {Router} from 'express'
import {createUser, getUserById, getAllUsers, deleteUserById} from '../controllers/users.controllers.js'

const router = Router()

router.post("/register", createUser)
router.get("/search/:id", getUserById)
router.get("/list", getAllUsers)
router.delete("/", deleteUserById)

export default router