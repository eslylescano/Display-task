import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Poll API', () => {
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
    });

    it('should list all polls as an array', async () => {
        const res = await request(app)
            .get('/api/polls');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
});
