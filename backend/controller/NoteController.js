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
