import { SubTask } from "../models/subTasks.model.js";

export const createSubTask = async (req, res) => {
    try {
        const {title, status, date, taskId,} = req.body;
        const subTask = await SubTask.create({
            title,
            status,
            date,
            task: taskId
        })
        res.status(201).json(subTask)
    } catch(error) {
        console.log("Error: ",error)
        res.status(501).json({
            message: error.message
        })
    }
}

export const updateSubTaskById = async(req, res) => {
    try {
        const existSubTask = await SubTask.findById(req.params.id)
        if(!existSubTask) return res.status(404).json({message: "Sub task not found"})
        
        const updateSubTask = await SubTask.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updateSubTask)
    } catch(error) {
        console.log("Error: ", error)
        res.status(500).json({message: error.message})
    }
}

export const getAllSubTask = async(req, res) => {
    try {
        const AllSubTask = await SubTask.find()
        res.status(201).json(AllSubTask)
    } catch (error) {
        console.log("Error: ", error)
        res.status(501).json({
            message: error.message
        })
    }
}

export const getSubTaskById = async (req, res) => {
    try {
        const subTaskById = await SubTask.findById(req.params.id);
        res.status(201).json(subTaskById)
    } catch(error) {
        console.log("Error: ", error)
        res.status(501).json({
            message: error.message
        })
    }
}


export const deleteSubTaskById = async (req, res) => {
    try {
        await SubTask.findByIdAndDelete(req.params.id)
        res.status(201).json({
            message: "Deleted Successfully"
        })
    } catch(error) {
        console.log("Error Occured: ", error)
        res.status(500).json({
            message: error.message
        })
    }
}