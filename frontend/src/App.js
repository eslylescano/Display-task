import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PollProvider } from './context/PoolContext';
import VotePage from './pages/VotePage/VotePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>
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
