import React, { useState } from 'react';
import './WrapUpTime.css';

type WrapUpOption = 'always' | 'never' | 'custom' | null;

const WrapUpTime: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<WrapUpOption>(null);
  const [customMinutes, setCustomMinutes] = useState<string>('');
  const [customSeconds, setCustomSeconds] = useState<string>('');

  const handleOptionSelect = (option: WrapUpOption) => {
    setSelectedOption(option);
    if (option !== 'custom') {
      setCustomMinutes('');
      setCustomSeconds('');
    }
  };

  const getStatusMessage = () => {
    if (!selectedOption) return 'No wrap-up time configured';
    if (selectedOption === 'always') return 'Wrap-up time is always blocked';
    if (selectedOption === 'never') return 'Wrap-up time is not blocked';
    if (selectedOption === 'custom' && (customMinutes || customSeconds)) {
      const mins = customMinutes ? `${customMinutes} min` : '';
      const secs = customSeconds ? `${customSeconds} sec` : '';
      return `Custom wrap-up time: ${mins}${mins && secs ? ' ' : ''}${secs}`;
    }
    return 'Custom wrap-up time (configure below)';
  };

  return (
    <div className="wrapup-section">
      <div className="wrapup-header">
        <h2 className="wrapup-title">Configure Wrap-up Time</h2>
        <p className="wrapup-subtitle">
          Set up wrap-up time preferences for this channel profile
        </p>
      </div>

      <div className="wrapup-content">
        <div className="status-display">
          <div className="status-icon">💬</div>
          <div className="status-text">{getStatusMessage()}</div>
        </div>

        <div className="prompt-section">
          <p className="prompt-label">Choose how to handle wrap-up time:</p>
          
          <div className="prompt-chips">
            <button
              className={`prompt-chip ${selectedOption === 'always' ? 'prompt-chip-active' : ''}`}
              onClick={() => handleOptionSelect('always')}
            >
              <span className="chip-icon">✓</span>
              <span className="chip-text">Always block time for wrap up</span>
            </button>

            <button
              className={`prompt-chip ${selectedOption === 'never' ? 'prompt-chip-active' : ''}`}
              onClick={() => handleOptionSelect('never')}
            >
              <span className="chip-icon">✗</span>
              <span className="chip-text">Don't block time for wrap up</span>
            </button>

            <button
              className={`prompt-chip ${selectedOption === 'custom' ? 'prompt-chip-active' : ''}`}
              onClick={() => handleOptionSelect('custom')}
            >
              <span className="chip-icon">⏱</span>
              <span className="chip-text">Custom time for wrap up</span>
            </button>
          </div>

          {selectedOption === 'custom' && (
            <div className="custom-time-section">
              <p className="custom-time-label">Specify custom wrap-up time:</p>
              <div className="time-inputs">
                <div className="time-input-group">
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    placeholder="0"
                    className="time-input"
                  />
                  <span className="time-unit">minutes</span>
                </div>
                <div className="time-input-group">
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={customSeconds}
                    onChange={(e) => setCustomSeconds(e.target.value)}
                    placeholder="0"
                    className="time-input"
                  />
                  <span className="time-unit">seconds</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="input-area">
          <input
            type="text"
            className="conversational-input"
            placeholder="Type your wrap-up time preferences or select an option above..."
            disabled
          />
          <button className="send-button" disabled>
            <span className="send-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WrapUpTime;
