// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage'; // Your game page component
import GameCompPage from './components/GameCompPage'; // Your game page component
import PetPage from './components/PetPage'; // Your pet page component
import QuizPage from './components/QuizPage'; // Your quiz page component
import QRChallengeMountain from "./components/QRChallenge-mountain";
import QRChallengeTable from "./components/QRChallenge-table";
import {Wrapper} from "./components/QRChallenge";
import QScreenChallenge from './modules/qscreenchallenge-redo';


function App() {
  //If user is defined in the local storage, then we can continue /home
  let canContinue = localStorage.getItem("user") !== null;
  console.log(canContinue);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={canContinue ? <HomePage /> : <Navigate replace to="/quiz" />} />
          <Route path="/home" element={canContinue ? <HomePage /> : <Navigate replace to="/quiz" />} />
          <Route path="/game" element={canContinue ? <GamePage /> : <Navigate replace to="/quiz" />} />
          <Route path="/jump-game" element={canContinue ? <QScreenChallenge /> : <Navigate replace to="/quiz" />} />
          <Route path="/pet" element={canContinue ? <PetPage /> : <Navigate replace to="/quiz" />} />
          <Route path="/qr-game-mountain" element={canContinue ? <Wrapper><QRChallengeMountain/></Wrapper> : <Navigate replace to="/quiz" />} />
          <Route path="/qr-game-table" element={canContinue ? <Wrapper><QRChallengeTable/></Wrapper> : <Navigate replace to="/quiz" />} />
          <Route path="/game-comp" element={canContinue ? <GameCompPage /> : <Navigate replace to="/quiz" />} />
          {/* The quiz page should not be accessable*/}
          <Route path="/quiz" element={!canContinue ? <QuizPage /> : <Navigate replace to="/" />}
          />          
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
