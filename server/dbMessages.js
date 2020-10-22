import mongoose, { Mongoose, Schema } from 'mongoose'

const whatsappSchema = new Mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
})

export default mongoose.model('messageContent', whatsappSchema)