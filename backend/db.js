const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/users';
const PORT = 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected ✅');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = { connectDB, PORT };