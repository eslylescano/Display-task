import React from 'react';
import Logo from '../../components/Logo/Logo';
import PollQuestion from '../../components/PollQuestion/PollQuestion';
import ResultsDisplay from '../../components/ResultsDisplay/ResultsDisplay';
import './ResultsPage.css';

function ResultsPage() {
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

    const totalVotes = pollData.options.reduce((sum, option) => sum + option.votes, 0);

    const pollResults = pollData.options.map((option) => ({
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
