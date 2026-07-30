import mongoose, { mongo } from  'mongoose'

const subNotesSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Untitled"
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    notes:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notes"
    }
}, {timestamps: true})

export const SubNotes = mongoose.model("SubNotes", subNotesSchema)