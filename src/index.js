import dotenv from 'dotenv'
import connectDatabase from './db/connect.js'
import app from "./app.js"

dotenv.config({
    path: './.env'
})

connectDatabase()
.then(() => {
    console.log("MONGO DB connected successfully")
    
    app.on("error", (error) => {
        console.log("Error occured", error)
        process.exit(1)
    })

    app.listen(process.env.PORT, () => {
        console.log(`Server is on at port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Mongodb conenction failed", error)
})
