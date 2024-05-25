import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import SteveJobsPage from './components/SteveJobsPage';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Helmet>
        <title>Sophie Codes</title>
      </Helmet>
      <div className="App">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/steve-jobs" element={<SteveJobsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
