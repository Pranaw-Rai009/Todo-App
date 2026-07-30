import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Notes"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {timestamps: true})

export const Notes = mongoose.model("Notes", notesSchema)