const config = {
    database: {
        type: process.env.DB_TYPE || 'mongodb',
        mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/polls',
    },
};

export default config;
