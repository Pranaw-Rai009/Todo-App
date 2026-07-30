// import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { DATABASE_NAME } from '../constants.js'

// dotenv.config({})


export default async function connectDatbase() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log(`${connectionInstance.connection.host}`)
    } catch (error) {
        // console.log("MONGO DATBASE failed to connect", error)
        throw error
    }
}

