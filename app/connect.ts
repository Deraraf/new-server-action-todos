import mongoose from 'mongoose'


const connect = async() =>{
    try {
        mongoose.connect(process.env.MONGODB_URI as string)
        console.log("database connected")
    } catch (error) {
        console.log(error)
        
    }
}
export default connect