import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VotePage from './pages/VotePage/VotePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
