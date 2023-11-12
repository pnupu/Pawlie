// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage'; // Your game page component
import GameCompPage from './components/GameCompPage'; // Your game page component
import PetPage from './components/PetPage'; // Your pet page component
import QuizPage from './components/QuizPage'; // Your quiz page component
import QRChallenge from "./components/QRChallenge";
import {Wrapper} from "./components/QRChallenge";
import QScreenChallenge from './modules/qscreenchallenge-redo'; 

function App() {
  //If user is defined in the local storage, then we can continue /home
  const canContinue = localStorage.getItem("user") !== null;
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={canContinue ? <HomePage /> : <Navigate replace to="/quiz" />} />
          <Route path="/home" element={canContinue ? <HomePage /> : <Navigate replace to="/quiz" />} />
          <Route path="/game" element={canContinue ? <GamePage /> : <Navigate replace to="/quiz" />} />
          <Route path="/jump-game" element={canContinue ? <QScreenChallenge /> : <Navigate replace to="/quiz" />} />
          <Route path="/pet" element={canContinue ? <PetPage /> : <Navigate replace to="/quiz" />} />
          <Route path="/qr-game" element={canContinue ? <Wrapper><QRChallenge/></Wrapper> : <Navigate replace to="/quiz" />} />
          <Route path="/game-comp" element={canContinue ? <GameCompPage /> : <Navigate replace to="/quiz" />} />
          {/* The quiz page is accessible to everyone */}
          <Route path="/quiz" element={<QuizPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
