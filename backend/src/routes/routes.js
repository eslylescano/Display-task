const routes = (app, pollController) => {
    app.post('/api/polls', (req, res) => pollController.createPoll(req, res));
};

export default routes;
