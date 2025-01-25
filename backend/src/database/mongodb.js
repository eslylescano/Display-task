import mongoose from 'mongoose';
import config from '../config/config.js';

const mongoUri = config.database.mongoUri;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectMongoDB;
