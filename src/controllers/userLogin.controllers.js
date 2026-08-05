import {User} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// export const authUserLogin = async(req, res) => {
//    const {email, password} = req.body
//    const existEmail = await User.findOne({email})
//    if(!existEmail) {
//     res.status(404).json({message: "User not found"})
//    } else {
//     try {
//         User.methods.isPasswordCorrect = async function(password) {
//             return await bcrypt.compare(password, this.password)
//         }
//     } catch(error) {
//         console.log("Error: ", error)
//         res.status(500).json({
//             message: error.message
//         })
//     }
//    }
// }

export const authUserLogin = async(req, res) => {
    try {
        const {email, password} = req.body
        const existEmail = await User.findOne({email})

        if(!existEmail) return res.status(404).json({message: "User with this email not found"})

        const existPassword = await existEmail.isPasswordCorrect(password)

        if(!existPassword) return res.status(401).json({message: "Incorrect Password"})
        
        const accesToken = existEmail.generateAccessToken()
        const refreshToken = existEmail.generateRefreshToken()
        
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
        })

        res.status(200).json({
            accesToken,
            message : "Login successfull"
        })
        
    } catch(error) {
        console.log("Error occured: ", error)
        res.status(500).json({message: error.message})
    }
}