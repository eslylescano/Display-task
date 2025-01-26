import React from 'react';
import Logo from '../../components/Logo/Logo';
import PollQuestion from '../../components/PollQuestion/PollQuestion';
import PollOptions from '../../components/PollOptions/PollOptions';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { usePoll } from '../../context/PoolContext';
import './VotePage.css';

const VotePage = () => {
    const { poll, selectedOption, isSubmitting, handleOptionSelect, handleSubmitVote } = usePoll();

    if (!poll) {
        return <div className="loading">Loading poll...</div>;
    }

    const options = poll.options.map(option => option.name);

    return (
        <div className="container">
            <Logo />
            <PollQuestion question={poll.question} />
            <PollOptions
                options={options}
                selectedOption={selectedOption}
                onSelectOption={handleOptionSelect}
            />
            <SubmitButton
                onClick={handleSubmitVote}
                disabled={isSubmitting}
                label={isSubmitting ? 'Submitting...' : 'SUBMIT'}
            />
        </div>
    );
};

export default VotePage;
