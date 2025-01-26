import React from 'react';
import Logo from '../../components/Logo/Logo';
import PollQuestion from '../../components/PollQuestion/PollQuestion';
import PollOptions from '../../components/PollOptions/PollOptions';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './VotePage.css';

function VotePage() {
    const poll = {
        question: 'Who will win the Premier League?',
        options: ['Manchester City', 'Arsenal', 'Liverpool'],
    };

    return (
        <div className="container">
            <Logo />
            <PollQuestion question={poll.question} />
            <PollOptions options={poll.options} />
            <SubmitButton />
        </div>
    );
}

export default VotePage;
