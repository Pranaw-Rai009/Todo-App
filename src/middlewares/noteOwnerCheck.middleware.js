import {Notes} from '../models/notes.model.js'

export const isNoteOwner = async function(req, res, next) {
    try {
        const workId = req.params.id
        // 400 for bad req
        if(!workId) return res.status(400).json({message: "Parent Note id not provided"})
        const userId = req.user._id

        const isEligible = await Notes.findOne({
            _id: workId,
            user: userId
        })
        if(!isEligible) return res.status(404).json({
            message: "Access Denied"
        })
        req.note = isEligible
        next()
    } catch(error) {
        console.log("Error: ", error)
        res.status(500).json({message: error.message})
    }
}