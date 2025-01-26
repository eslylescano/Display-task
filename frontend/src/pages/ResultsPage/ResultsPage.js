import React from 'react';
import Logo from '../../components/Logo/Logo';
import PollQuestion from '../../components/PollQuestion/PollQuestion';
import ResultsDisplay from '../../components/ResultsDisplay/ResultsDisplay';
import { usePoll } from '../../context/PoolContext';
import './ResultsPage.css';

function ResultsPage() {
    const { poll } = usePoll();

    if (!poll) {
        return <div className="loading">Loading results...</div>;
    }

    const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

    const pollResults = poll.options.map((option) => ({
        option: option.name,
        percentage: totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(1) : 0,
    }));

    return (
        <div className="container">
            <Logo />
            <PollQuestion question="Thank you for your response" />
            <div className="results-container">
                {pollResults.map((result, index) => (
                    <ResultsDisplay
                        key={index}
                        option={result.option}
                        percentage={result.percentage}
                    />
                ))}
            </div>
        </div>
    );
}

export default ResultsPage;
