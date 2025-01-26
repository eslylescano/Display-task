import Vote from '../models/Vote.js';
import VoteRepository from './VoteRepository.js';

class MongoVoteRepository extends VoteRepository {
    async createVote(voteData) {
        const vote = new Vote(voteData);
        return await vote.save();
    }

    async findVotesByPollId(pollId) {
        return await Vote.find({ pollId }).sort({ timestamp: 1 });
    }
}

export default MongoVoteRepository;