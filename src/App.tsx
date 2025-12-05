import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';
import FormSection from './components/Form/FormSection';
import './styles/App.css';

const App: React.FC = () => {
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
              <button className="tab tab-active">General</button>
              <button className="tab">Automated Messages</button>
              <button className="tab tab-dropdown">
                Related
                <span className="dropdown-arrow">▼</span>
              </button>
            </div>
            <FormSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
