import dotenv from 'dotenv';

dotenv.config();

const config = {
    database: {
        type: process.env.DB_TYPE || 'mongodb',
        mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/polls',
    },
};

console.log({ config });

export default config;
