import RepositoryFactory from '../repositories/index.js';

class PollService {
    constructor() {
        this.repository = RepositoryFactory.getPollRepository();
    }

    async createPoll(pollData) {
        if (!pollData.question || !pollData.options || pollData.options.length < 2) {
            throw new Error('Poll must have a question and at least 2 options');
        }
        return await this.repository.createPoll(pollData);
    }
}

export default PollService;
