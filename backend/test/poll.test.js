import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Poll API', () => {
    let pollId;
    it('should create a new poll', async () => {
        const res = await request(app)
            .post('/api/polls')
            .send({
                question: 'Who will win the Premier League?',
                options: [
                    { name: 'Manchester City' },
                    { name: 'Arsenal' },
                    { name: 'Liverpool' },
                ],
            });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('question').equal('Who will win the Premier League?');
        expect(res.body.options).to.have.lengthOf(3);
        pollId = res.body._id;
    });

    it('should retrieve the created poll by ID', async () => {
        expect(pollId).to.not.be.undefined;

        const res = await request(app)
            .get(`/api/polls/${pollId}`);

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('question').equal('Who will win the Premier League?');
        expect(res.body.options).to.have.lengthOf(3);
    });

    it('should list all polls as an array', async () => {
        const res = await request(app)
            .get('/api/polls');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should cast a vote for an option', async () => {
        const optionName = 'Manchester City';

        const res = await request(app)
            .post(`/api/polls/${pollId}/vote/${encodeURIComponent(optionName)}`)
            .send();

        expect(res.status).to.equal(200);
        const votedPoll = res.body;
        const votedOption = votedPoll.options.find(o => o.name === optionName);
        expect(votedOption).to.exist;
        expect(votedOption.votes).to.equal(1);
    });
});
