import React from 'react';
import './PollQuestion.css';

function PollQuestion({ question }) {
    return <h2 className="poll-question">{question}</h2>;
}

export default PollQuestion;