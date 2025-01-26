import React from 'react';
import './PollOptions.css';

const PollOptions = ({ options, selectedOption, onSelectOption }) => {
  return (
    <div className="poll-options">
      {options.map((option) => (
        <div key={option} className="poll-option">
          <input
            type="radio"
            id={option}
            name="pollOption"
            value={option}
            checked={selectedOption === option}
            onChange={() => onSelectOption(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default PollOptions;