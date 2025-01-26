import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VotePage from './pages/VotePage/VotePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vote" element={<VotePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
