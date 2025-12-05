import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="toolbar">
        <div className="toolbar-left">
          <button className="toolbar-btn icon-only" title="Back">←</button>
          <button className="toolbar-btn icon-only" title="Document">📄</button>
          <button className="toolbar-btn icon-only" title="External link">🔗</button>
          <div className="toolbar-separator"></div>
          <button className="toolbar-btn">Save</button>
          <button className="toolbar-btn">Save & Close</button>
          <button className="toolbar-btn">New</button>
          <button className="toolbar-btn">Delete</button>
          <button className="toolbar-btn">Refresh</button>
          <button className="toolbar-btn">Check Access</button>
        </div>
        <div className="toolbar-right">
          <button className="toolbar-btn">Share</button>
        </div>
      </div>

      <div className="content-area">
        <div className="page-header">
          <h1 className="page-title">
            CBA Direct Banking Profile (Demo)
            <span className="status-text">- Saved</span>
          </h1>
          <div className="page-subtitle">Channel Profile</div>
        </div>

        <div className="tab-navigation">
          <div className="tab active">General</div>
          <div className="tab">Automated Messages</div>
          <div className="tab">
            Related
            <span className="dropdown-icon">▼</span>
          </div>
        </div>

        <div className="form-container">
          <div className="form-header">
            <button className="form-assist-btn">
              <span className="clipboard-icon">📋</span>
              Form assist
            </button>
          </div>

          <div className="form-content">
            <div className="form-field">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                value="CBA Direct Banking Profile (Demo)" 
                readOnly
              />
            </div>

            <div className="form-field">
              <label htmlFor="channel">
                Channel <span className="required">*</span>
              </label>
              <select id="channel">
                <option value="voice">Voice</option>
                <option value="chat">Chat</option>
                <option value="email">Email</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
