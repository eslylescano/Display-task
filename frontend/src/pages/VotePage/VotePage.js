import React from 'react';
import Logo from '../../components/Logo/Logo';
import PollQuestion from '../../components/PollQuestion/PollQuestion';
import PollOptions from '../../components/PollOptions/PollOptions';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './VotePage.css';

function VotePage() {
    const pollData = {
        _id: '6794e3a549e1cdbcc188254e',
        question: 'Who will win the Premier League?',
        options: [
            { name: 'Manchester City', votes: 3, _id: '6794e3a549e1cdbcc188254f' },
            { name: 'Arsenal', votes: 2, _id: '6794e3a549e1cdbcc1882550' },
            { name: 'Liverpool', votes: 0, _id: '6794e3a549e1cdbcc1882551' },
        ],
        createdAt: '2025-01-25T13:14:13.317Z',
        __v: 0,
    };

    const options = pollData.options.map(option => option.name);

    return (
        <div className="container">
            <Logo />
            <PollQuestion question={pollData.question} />
            <PollOptions options={options} />
            <SubmitButton />
        </div>
    );
}

export default VotePage;
