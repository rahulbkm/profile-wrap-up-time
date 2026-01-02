import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';
import FormSection from './components/Form/FormSection';
import WrapUpTime from './components/WrapUpTime/WrapUpTime';
import PostCallSurvey from './components/PostCallSurvey/PostCallSurvey';
import NotificationTemplates from './components/NotificationTemplates/NotificationTemplates';
import './styles/App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Toolbar />
          <div className="content-area">
            <div className="page-title">
              <h1>CBA Direct Banking Profile (Demo) - Saved</h1>
              <p className="subtitle">Channel Profile</p>
            </div>
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'general' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                General
              </button>
              <button 
                className={`tab ${activeTab === 'wrap-up' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('wrap-up')}
              >
                Wrap up time
              </button>
              <button 
                className={`tab ${activeTab === 'automated-messages' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('automated-messages')}
              >
                Automated Messages
              </button>
              <button 
                className={`tab ${activeTab === 'post-call-survey' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('post-call-survey')}
              >
                Post-call survey
              </button>
              <button 
                className={`tab ${activeTab === 'notification-templates' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('notification-templates')}
              >
                Notification templates
              </button>
              <button className="tab tab-dropdown">
                Related
                <span className="dropdown-arrow">▼</span>
              </button>
            </div>
            {activeTab === 'general' && <FormSection />}
            {activeTab === 'wrap-up' && <WrapUpTime />}
            {activeTab === 'post-call-survey' && <PostCallSurvey />}
            {activeTab === 'notification-templates' && <NotificationTemplates />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
