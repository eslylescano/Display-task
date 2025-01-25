import connectMongoDB from './mongodb.js';

const connectDB = async () => {
    await connectMongoDB();
};

export default connectDB;
