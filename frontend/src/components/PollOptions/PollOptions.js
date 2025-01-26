import React from 'react';
import './PollOptions.css';

function PollOptions({ options }) {
  return (
    <div className="poll-options">
      {options.map((option, index) => (
        <div key={index} className="poll-option">
          {option}
        </div>
      ))}
    </div>
  );
}

export default PollOptions;