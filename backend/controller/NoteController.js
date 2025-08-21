import Note from "../model/Note.js"


export const addNote = async(req,res)=>{
    try {
        const {title,content} = req.body
        if(!title || !content){
            return res.status(404).json({success:false,message:"All field are required"})
        }

        const newNote = await Note.create({
            title,
            content
        })
        await newNote.save()
        res.status(201).json({success:true, data : newNote})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
}

export const getAllNote = async(req,res)=>{
    try {
        const allNotes = await Note.find()
        

        res.status(200).json({success:true,data : allNotes})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

export const getNoteById =async(req,res)=>{
    try {
        const noteId = req.params
        if(!noteId){
            return res.status(400).json({success:false, message: "Note ID is empty"})
        }
        const noteById = await Note.findById(noteId)
        
        res.status(200).json({success:true, data: noteById})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
}
