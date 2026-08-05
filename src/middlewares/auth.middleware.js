import jwt from 'jsonwebtoken'

export const authAccesToken = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"]
        if (!authHeader) return res.status(401).json({ message: "Access token missing" })
        const authToken = authHeader.split(" ")[1]

        const decodedToken = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET)
       req.user = decodedToken
       next()
    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({message: error.message})
    }

}