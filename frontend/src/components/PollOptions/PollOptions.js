import React from 'react';
import './PollOptions.css';

const PollOptions = ({ options, selectedOption, onSelectOption }) => {
  return (
    <div className="poll-options">
      {options.map((option) => (
        <button
          key={option}
          className={`poll-option ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => onSelectOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PollOptions;
