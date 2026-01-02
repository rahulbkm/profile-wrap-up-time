import React, { useState } from 'react';
import './PostCallSurvey.css';

const PostCallSurvey: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="post-call-survey-section">
      <div className="post-call-survey-content">
        <div className="post-call-survey-group">
          <div className="toggle-container">
            <label className="toggle-label">
              <span className="toggle-text">Post-call survey</span>
              <div className="toggle-switch-wrapper">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={isEnabled}
                  onChange={(e) => setIsEnabled(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </label>
          </div>
          
          {isEnabled && (
            <div className="survey-options">
              <p className="survey-description">
                When selected, post conversation survey will powered by Microsoft Copilot Studio AI agent. A survey AI agent will be automatically triggered once a conversation has been ended allowing customers to provide their feedback
              </p>
              <div className="form-group">
                <label htmlFor="feedback-survey" className="form-label">
                  Customer feedback survey
                </label>
                <div className="select-wrapper">
                  <select id="feedback-survey" className="form-select">
                    <option value="">Select a survey template</option>
                    <option value="standard">Standard feedback survey</option>
                    <option value="detailed">Detailed feedback survey</option>
                    <option value="quick">Quick feedback survey</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCallSurvey;
