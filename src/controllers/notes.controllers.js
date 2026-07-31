import {Notes} from '../models/notes.model.js'

export const createNotes = async (req, res) => {
    try {
        const {title} = req.body;
        const note = await Notes.create({title});
        res.status(201).json(note)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}