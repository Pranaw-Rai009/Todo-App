import { Task } from "../models/tasks.model.js";

export const createTask = async(req, res) => {
    try {

        const {title} = req.body;
        const task = await Task.create({
            title,
            user: req.user._id
        })
        res.status(201).json({
            message: "Task Created"
        })
    } catch(error) {
        console.log("Error: ", error)
        res.status(501).json({
            message: error.message
        })
    }
}

export const updateTaskById = async(req, res) => {
    try {
        const existTask = await Task.findById(req.params.id)
        if(!existTask) return res.status(404).json({message: "Not found"})
        
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.status(200).json(updateTask)
    }catch (error) {
        console.log("Error: ", error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const getTaskById = async ( req, res) => {
    try {
        const taskById = await Task.findById(req.params.id);
        res.status(201).json(taskById)
    } catch(error) {
        console.log("Error: ", error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const getAllTask = async(req, res) => {
    try {
        const allTask = await Task.find();
        res.status(201).json(allTask)
    } catch(error) {
        console.log("Error: ", error)
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteTaskbyId = async(req, res) => {
    try {
        // if(!await Task.findById(req.params.id)) return null;
        const existTask = await Task.findById(req.params.id)
        if(!existTask) {
            return res.status(200).json({
                message: "The task doesn't exist"
            })
        } else {

            await Task.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message: "Deleted Task"
            })
        }    
    } catch(error) {
        console.log("Error in deletion: ", error)
        res.status(500).json({
            message: error.message
        })
    }
}