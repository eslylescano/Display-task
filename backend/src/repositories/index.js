import config from '../config/config.js';
import MongoPollRepository from './mongoPollRepository.js';
import MongoVoteRepository from './MongoVoteRepository.js';

class RepositoryFactory {
    static getPollRepository() {
        switch (config.database.type) {
            case 'mongodb':
                return new MongoPollRepository();

            default:
                throw new Error(`Unsupported database type: ${config.database.type}`);
        }
    }

    static getVoteRepository() {
        switch (config.database.type) {
            case 'mongodb':
                return new MongoVoteRepository();

            default:
                throw new Error(`Unsupported database type: ${config.database.type}`);
        }
    }
}

export default RepositoryFactory;
