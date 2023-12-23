const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://vvenna:Venk%40t99@nodeexpressprojects.b886lqq.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) =>{
    return mongoose
      .connect(connectionString,
         {  useNewUrlParser: true,
            useUnifiedTopology: true 
        })
      .then(() => console.log('CONNECTED TO THE DB...'))
      .catch((err) => console.log(err));
}

module.exports = connectDB