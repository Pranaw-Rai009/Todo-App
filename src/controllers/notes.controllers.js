import {Notes} from '../models/notes.model.js'

export const createNotes = async (req, res) => {
    try {
        const {title} = req.body;
        const note = await Notes.create({
            title,
            user: req.user._id
        });
        res.status(201).json(note)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateNoteById = async(req, res) => {
    try {
        const existNote = await Notes.findById(req.params.id);
        if(!existNote) return res.status({message: "Note Doesn't exist"})
        
        await Notes.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            message: "Update Note"
        })
    } catch(error) {
        console.log("Error occured while updating", error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const getAllNotes = async (req, res) => {
    try {
        const allNotes = await Notes.find()
        res.status(200).json(allNotes)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const getAllNotesbyId = async (req, res) => {
    try{
        const NotesbyId = await Notes.findById(req.params.id) //req.params.id is how you read that captured value inside your controller.
        res.status(200).json(NotesbyId)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })

    }
}

export const deleteNotesbyId = async (req, res) => {
    try {
        await Notes.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Deleted successfully"
        })
     } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't detele the data"
        })
     }
}