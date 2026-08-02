import {SubNotes} from '../models/subNotes.model.js'

export const createSubNotes = async (req, res) => {
    try {
        const {title, description, notesId} = req.body
        const subNote = await SubNotes.create({
            title,
            description,
            notes: notesId
        })
        res.status(201).json(subNote)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })

    }
}

export const getAllSubNotes = async (req, res) => {
    try {
        const allSubNotes = await SubNotes.find()
        res.status(200).json(allSubNotes)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const getSubNotesById = async (req, res) => {
    try {
        const subNotesById = await SubNotes.findById(req.params.id)
        res.status(200).json(subNotesById)
    } catch(error) {
        console.log(error)
        rse.status(500).json({
            message: error.message
        })
    }
    
}

export const deleteSubNotesById = async (req, res) => {
    try {
        await SubNotes.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}