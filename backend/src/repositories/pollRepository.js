class PollRepository {
    createPoll(pollData) {
        throw new Error('Method not implemented');
    }

    async findAllPolls() {
        throw new Error('findAllPolls method not implemented');
    }

    async findPollById(id) {
        throw new Error('Method not implemented');
    }

    async castVote(id, optionName) {
        throw new Error('castVote method not implemented');
    }

    async findVotesByPoll(id) {
        throw new Error('findVotesByPoll method not implemented');
    }

}

export default PollRepository;
