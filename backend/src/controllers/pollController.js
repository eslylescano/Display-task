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

    async getPollById(req, res) {
        try {
            const pollId = req.params.id;
            const poll = await this.service.getPollById(pollId);

            if (!poll) {
                return res.status(404).json({ error: 'Poll not found' });
            }

            res.status(200).json(poll);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async castVote(req, res) {
        try {
            const { id, optionName } = req.params;
            const updatedPoll = await this.service.castVote(id, optionName);
            res.status(200).json(updatedPoll);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getVotesForPoll(req, res) {
        try {
            const votes = await this.service.getVotesForPoll(req.params.id);
            if (!votes || votes.length === 0) {
                return res.status(404).json({ error: 'No votes found for this poll' });
            }
            res.status(200).json(votes);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default PollController;
