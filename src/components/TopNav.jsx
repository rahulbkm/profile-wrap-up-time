import React from 'react';
import './TopNav.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <div className="waffle-icon">⊞</div>
        <span className="brand-text">Dynamics 365</span>
        <span className="separator">|</span>
        <span className="page-title">Copilot Service admin center</span>
      </div>
      <div className="top-nav-center">
        <span className="sandbox-label">SANDBOX</span>
      </div>
      <div className="top-nav-right">
        <button className="icon-btn" title="Search">🔍</button>
        <button className="icon-btn" title="Help">💡</button>
        <button className="icon-btn" title="Add">+</button>
        <button className="icon-btn" title="Filter">⚏</button>
        <button className="icon-btn" title="Settings">⚙</button>
        <button className="icon-btn" title="Help">?</button>
        <button className="icon-btn" title="Notifications">🔔</button>
        <div className="user-avatar">Ca</div>
      </div>
    </div>
  );
};

export default TopNav;
