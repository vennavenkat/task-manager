const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware

app.use(express.json())

const port = 3000
//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,() => {
            console.log('sever listening on port 3000...');
        })
    } catch (error) {
        
    }
}

start()
