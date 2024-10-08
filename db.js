const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://KhushiSharma:Khushi4433@khushi2415.mj1rt.mongodb.net/?retryWrites=true&w=majority&appName=khushi2415';
const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;