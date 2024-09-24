import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import SteveJobsPage from './components/SteveJobsPage';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Sophie Codes</title>
      </Helmet>
      <div className="App">
        {/* 使用 HashRouter 来确保在 GitHub Pages 上正确处理路由 */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/steve-jobs" element={<SteveJobsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;