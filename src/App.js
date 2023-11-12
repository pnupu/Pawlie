// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage'; // Your game page component
import GameCompPage from './components/GameCompPage'; // Your game page component
import PetPage from './components/PetPage'; // Your pet page component
import QuizPage from './components/QuizPage'; // Your quiz page component
import QRChallenge from "./components/QRChallenge";
import {Wrapper} from "./components/QRChallenge";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/dev" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game-comp" element={<GameCompPage />} />
          <Route path="/pet" element={<PetPage />} />
          <Route path="/" element={<QuizPage />} />
          <Route path="/qr-game" element={<Wrapper><QRChallenge/></Wrapper>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
