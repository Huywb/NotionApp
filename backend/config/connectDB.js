import mongoose from "mongoose"


export const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.DB_URL)
        console.log(connection.connection.host)
        console.log(connection.connection.name)
        if(!connection){
            console.log("Something wrong went connect DB")
        }
        console.log("Connected DB success")
    } catch (error) {
        console.log(error)
    }
}