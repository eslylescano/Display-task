class PollController {
    constructor(service) {
        this.service = service;
    }

    async createPoll(req, res) {
        try {
            const poll = await this.service.createPoll(req.body);
            res.status(201).json(poll);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllPolls(req, res) {
        try {
            const polls = await this.service.getAllPolls();
            res.status(200).json(polls);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default PollController;
