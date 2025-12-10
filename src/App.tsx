import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';
import FormSection from './components/Form/FormSection';
import WrapUpTime from './components/WrapUpTime/WrapUpTime';
import './styles/App.css';

type TabType = 'general' | 'wrapup' | 'automated' | 'related';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('general');

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
                className={`tab ${activeTab === 'wrapup' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('wrapup')}
              >
                Wrap up time
              </button>
              <button
                className={`tab ${activeTab === 'automated' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('automated')}
              >
                Automated Messages
              </button>
              <button className="tab tab-dropdown">
                Related
                <span className="dropdown-arrow">▼</span>
              </button>
            </div>
            {activeTab === 'general' && <FormSection />}
            {activeTab === 'wrapup' && <WrapUpTime />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
