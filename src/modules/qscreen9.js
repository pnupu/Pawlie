import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'


function QScreen9({ nextStep}) {
  const isMobile = window.innerWidth <= 768; // typical breakpoint for mobile devices
  let navigate = useNavigate();

  const handleStartChallengeClick = () => {
    // Navigate to the '/challenge' route when the button is clicked
    navigate('/game');
  };

  if (isMobile) {
    return (
        <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-2xl">
            Mountain Climb
        </h2>
        <img src="/qr.jpg" style={{height: 500, borderRadius: 10, width: 500}} className="max-w-2xl  w-full"></img>
        <p className="text-lg md:text-xl text-dark-secondary text-center mt-8 max-w-2xl">
            Jump, dip, and squat your way to the top of the leaderboard. The faster you move, the more points you earn.
        </p>
        {/* <Alert text={"Run this game on your laptop with webcam permission. The solution uses a human recognition model, therefore you have to be the only human in the frame."}></Alert> */}

        <div className="flex gap-4 items-center mt-8">
            <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all"
            onClick={() => nextStep()}
            >
            Let's get going!
            </button>
        </div>
        </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-2xl">
        Red is Lava
      </h2>
      <img src="/part2.gif" style={{borderRadius: 10, height: 500, width: 500}} className="max-w-2xl  w-full"></img>
      <p className="text-lg md:text-xl text-dark-secondary text-center mt-8 max-w-2xl">
        Jump, dip, and squat your way to the top of the leaderboard. The faster you move, the more points you earn.
      </p>
      <Alert text={"Run this game on your laptop with webcam permission. The solution uses a human recognition model, therefore you have to be the only human in the frame."}></Alert>

      <div className="flex gap-4 items-center mt-8">
        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all"
          onClick={() => nextStep()}
        >
          Let's get going!
        </button>
      </div>
    </div>
  );
}


const Alert = ({text}) => {
  return (
    <div className="rounded-md mt-6 w-1/2 bg-yellow-50 p-4 mb-3">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Instructions</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QScreen9;
