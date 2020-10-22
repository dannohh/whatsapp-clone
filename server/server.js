import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 9000

const connection_url = 'mongodb+srv://admin:autT9WARJf5nzVX1@cluster0.5k5hl.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

app.get('/', (req, res) => res.status(200).send('hello whatsapp'))

app.listen(port, () => console.log(`listening on port: ${port}`))