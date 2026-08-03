import {Router} from 'express'
import {createUser, getUserById, getAllUsers, deleteUserById, udpateUserById} from '../controllers/users.controllers.js'

const router = Router()

router.post("/registerUser", createUser)
router.get("/searchUser/:id", getUserById)
router.get("/listUser", getAllUsers)
router.delete("/deleteUser", deleteUserById)
router.patch("/updateUser/:id", udpateUserById)

export default router