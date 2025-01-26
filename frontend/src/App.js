import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PollProvider } from './context/PoolContext';
import VotePage from './pages/VotePage/VotePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/vote/6796913d2086c1718b444661" replace />} />
        <Route
          path="/vote/:pollId"
          element={
            <PollProvider>
              <VotePage />
            </PollProvider>
          }
        />
        <Route
          path="/results/:pollId"
          element={
            <PollProvider>
              <ResultsPage />
            </PollProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
