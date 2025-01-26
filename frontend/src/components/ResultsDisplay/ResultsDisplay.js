import React from 'react';
import './ResultsDisplay.css';

function ResultsDisplay({ option, percentage }) {
    return (
        <div className="result" style={{ '--percentage': percentage }}>
            <div className="result-option">{option}</div>
            <div className="result-percentage">{percentage}%</div>
        </div>
    );
}

export default ResultsDisplay;