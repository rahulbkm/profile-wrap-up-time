import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="app-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App
