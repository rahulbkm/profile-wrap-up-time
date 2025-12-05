import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-search">
        <input type="text" placeholder="Search admin sett..." />
      </div>
      
      <div className="sidebar-item">
        <span className="item-icon">📋</span>
        <span>Guided channel s...</span>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Customer support</div>
        <div className="sidebar-item">
          <span className="item-icon">📊</span>
          <span>Overview</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">👥</span>
          <span>User management</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">🤖</span>
          <span>AI Agents</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">📡</span>
          <span>Channels</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">💭</span>
          <span>Intent</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">📥</span>
          <span>Queues</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">🔀</span>
          <span>Routing</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">💼</span>
          <span>Workstreams</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">📋</span>
          <span>Case settings</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">👤</span>
          <span>Customer settings</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">✓</span>
          <span>Quality managem...</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Support experience</div>
        <div className="sidebar-item">
          <span className="item-icon">📊</span>
          <span>Overview</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">🖥️</span>
          <span>Workspaces</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">⚡</span>
          <span>Productivity</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">📚</span>
          <span>Knowledge</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">💬</span>
          <span>Collaboration</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Operations</div>
        <div className="sidebar-item">
          <span className="item-icon">📊</span>
          <span>Overview</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">📈</span>
          <span>Insights</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">📅</span>
          <span>Calendar</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">📄</span>
          <span>Service terms</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">⏰</span>
          <span>Service scheduling</span>
        </div>
        <div className="sidebar-item">
          <span className="item-icon">⚙️</span>
          <span>Miscellaneous</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
