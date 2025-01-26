const config = {
    database: {
        type: process.env.DB_TYPE || 'mongodb',
        mongoUri: process.env.MONGO_URI || 'mongodb+srv://DizplaiUser:xPrJbTpgbPVuCuBm@dizplai.pxyfq.mongodb.net/?retryWrites=true&w=majority&appName=Dizplai/polls',
    },
};

export default config;
