import mongoose from 'mongoose'

const subTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,    
    },
    status: {
        type: String,
        enum: ['Pending', "In progress", "Done"],
        default: 'Pending'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }
}, {timestamps: true})

export const SubTask = mongoose.model("SubTask", subTaskSchema)