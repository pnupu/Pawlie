// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage'; // Your game page component
import PetPage from './components/PetPage'; // Your pet page component
import QuizPage from './components/QuizPage'; // Your quiz page component

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/pet" element={<PetPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
