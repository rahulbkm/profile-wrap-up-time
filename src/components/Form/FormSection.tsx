import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import './FormSection.css';

const FormSection: React.FC = () => {
  return (
    <div className="form-section">
      <div className="form-header">
        <button className="form-assist-btn">
          <FaRegStar className="assist-icon" />
          <span>Form assist</span>
        </button>
      </div>
      <div className="form-content">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value="CBA Direct Banking Profile (Demo)"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="channel" className="form-label">
            Channel <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select id="channel" className="form-select">
              <option value="voice">Voice</option>
              <option value="chat">Chat</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
