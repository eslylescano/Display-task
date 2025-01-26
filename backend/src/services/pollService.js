import RepositoryFactory from '../repositories/index.js';

class PollService {
    constructor() {
        this.poolRepository = RepositoryFactory.getPollRepository();
        this.voteRepository = RepositoryFactory.getVoteRepository();
    }

    async createPoll(pollData) {
        if (!pollData.question || !pollData.options || pollData.options.length < 2) {
            throw new Error('Poll must have a question and at least 2 options');
        }
        return await this.poolRepository.createPoll(pollData);
    }

    async getAllPolls() {
        return await this.poolRepository.findAllPolls();
    }

    async getPollById(id) {
        return await this.poolRepository.findPollById(id);
    }

    async castVote(pollId, optionName) {

        const poll = await this.poolRepository.findPollById(pollId);
        if (!poll) {
            throw new Error('Poll not found');
        }

        const option = poll.options.find(opt => opt.name === optionName);
        if (!option) {
            throw new Error('Option not found in this poll');
        }

        option.votes += 1;

        await this.poolRepository.updatePoll(poll);

        const voteData = {
            pollId: pollId,
            optionName: optionName,
            timestamp: new Date()
        };
        await this.voteRepository.createVote(voteData);

        return poll;
    }

    async getVotesForPoll(pollId) {
        return await this.voteRepository.findVotesByPollId(pollId);
    }
}

export default PollService;
