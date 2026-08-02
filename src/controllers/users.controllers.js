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
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}