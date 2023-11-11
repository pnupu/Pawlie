import React from 'react';
import { useNavigate } from 'react-router-dom';

function QScreen8() {
  let navigate = useNavigate();

  const handleStartChallengeClick = () => {
    // Navigate to the '/challenge' route when the button is clicked
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-8 max-w-2xl">
        Fitness is Better Together!
      </h2>
      <img src="/leaderboard.png" alt="Leaderboard" className="max-w-2xl" />
      <p className="text-xl text-dark-secondary text-center mt-8 max-w-2xl">
        Join a supportive fitness community where every step counts! Track your
        journey and share in the collective achievements. Together, we turn
        individual efforts into inspiring group milestones!
      </p>

      <div className="flex gap-4 items-center mt-8">
        <button 
          className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all"
          onClick={handleStartChallengeClick}
        >
          Start a Challenge
        </button>
      </div>
    </div>
  );
}

export default QScreen8;
