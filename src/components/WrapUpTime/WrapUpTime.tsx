import React, { useState } from 'react';
import './WrapUpTime.css';

const WrapUpTime: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const predefinedOptions = [
    'No wrap up time is needed',
    'As long as the CSR needs',
    'Wrap time will be 5 minutes 30 seconds'
  ];

  const handlePillClick = (option: string) => {
    setInputValue(option);
  };

  return (
    <div className="wrap-up-time-section">
      <div className="wrap-up-time-content">
        <div className="wrap-up-time-group">
          <label htmlFor="wrap-up-input" className="wrap-up-label">
            Configure Wrap Up Time
          </label>
          <p className="wrap-up-description">
            Use natural language to describe your wrap up time requirements, or select a predefined option below.
          </p>
          <input
            type="text"
            id="wrap-up-input"
            className="wrap-up-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your wrap up time requirements..."
          />
          <div className="predefined-pills">
            {predefinedOptions.map((option) => (
              <button
                key={option}
                className="pill-button"
                onClick={() => handlePillClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapUpTime;
