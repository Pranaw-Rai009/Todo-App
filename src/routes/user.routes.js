import {Router} from 'express'
import {createUser, getUserById, getAllUsers, deleteUserById, udpateUserById} from '../controllers/users.controllers.js'

import {authUserLogin} from '../controllers/userLogin.controllers.js'
import {authAccesToken} from '../middlewares/auth.middleware.js'
const router = Router()

router.post("/registerUser", authAccesToken,createUser)
router.get("/searchUser/:id", authAccesToken,getUserById)
router.get("/listUser", authAccesToken,getAllUsers)
router.delete("/deleteUser", authAccesToken,deleteUserById)
router.patch("/updateUser/:id", authAccesToken,udpateUserById)
router.post("/login",authUserLogin)

export default router