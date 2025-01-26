import express from 'express';
import connectToDatabase from './database/index.js';
import PollController from './controllers/pollController.js';
import PollService from './services/pollService.js';
import routes from './routes/routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());


connectToDatabase();

const pollService = new PollService();
const pollController = new PollController(pollService);

app.use(cors());

routes(app, pollController);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app;
