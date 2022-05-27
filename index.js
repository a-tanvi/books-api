const express = require('express');
const app = express();
const bookRoute = require('./routes/book')
const connectDB = require('./db/connect')
require('dotenv').config();

const port = 8000;

//middlewares
app.use(express.json());

//routes
app.use('/api/v1', bookRoute)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening on ${port}`))
    }

    catch(error){
        console.log(error);
    }
}

start();

