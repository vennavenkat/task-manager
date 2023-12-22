const express = require('express')
const app = express()
const tasks = require('./routes/tasks')


//middleware

app.use(express.json())

const port = 3000
//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)


app.listen(port,() => {
    console.log('sever listening on port 3000...');
})