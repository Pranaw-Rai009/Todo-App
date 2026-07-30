import mongoose from 'mongoose'

const tasksSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Tasks"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {timestamps: true})

export const Task = mongoose.model("Task", tasksSchema)