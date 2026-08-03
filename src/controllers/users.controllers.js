import {User} from '../models/user.model.js'

export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json(user)
        console.log("User created successfully")
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}
export const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteUserById = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        console.log("User deleted successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}