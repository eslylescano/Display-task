import Poll from '../models/Poll.js';
import PollRepository from './pollRepository.js';

class MongoPollRepository extends PollRepository {
    async createPoll(pollData) {
        const poll = new Poll(pollData);
        return await poll.save();
    }

}

export default MongoPollRepository;
