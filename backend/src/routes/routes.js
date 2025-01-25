const routes = (app, pollController) => {
    app.post('/api/polls', (req, res) => pollController.createPoll(req, res));
    app.get('/api/polls', (req, res) => pollController.getAllPolls(req, res));
    app.get('/api/polls/:id', (req, res) => pollController.getPollById(req, res));
};

export default routes;
