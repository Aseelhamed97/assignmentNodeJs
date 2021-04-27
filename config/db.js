const mongoose = require('mongoose');

const connectDatabase = async () => {
const conn = await mongoose.connect('mongodb://localhost:27017/customer', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDatabase;