const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connect to mongoDB");
    } catch(error){
        console.error('Error connecting to MongoDB', error.message);
    }
};

module.exports = connectToMongoDB;