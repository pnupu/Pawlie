import { useEffect, useState } from "react";
import QRChallenge from "../components/QRChallenge";
import {Wrapper} from "../components/QRChallenge";


function QScreenChallenge({nextStep}) {
  const [canContinue, setCanContinue] = useState(false);
  const isMobile = window.innerWidth <= 768; // typical breakpoint for mobile devices
  
  useEffect(() => {
    // set a timer that checks localStorage jumpScore and sets variable
    const timer = setInterval(() => {
      console.log('This will run after 1 second!');
      if (!canContinue) {
        if(localStorage.getItem('jumpScore')) {
          setCanContinue(true);
        }
      }
    }, 1000);

    return () => {
      // clear timer
      clearInterval(timer);
    }

  }, [canContinue])

  if (isMobile) {
    return (
        <QRChallenge fromSignIn={true} onFound={() => nextStep()} whereToFind={"Find the first challenge near the stairs. Look for a QR code."}/>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-2xl">
        Let’s kickstart your journey!
      </h2>
      <div
        style={{
          boxShadow: "0px 4px 0px 0px #CCDEFF", // Added a blur radius of 4px
        }}
        className="rounded-xl p-5 border-[#4D8EFF] border-2 flex flex-col gap-4 items-start "
      >
        <p className="text-[#2198F3] text-sm uppercase font-bold">
          Challenge 1
        </p>
        <p className="text-lg">
          Complete this fun 30-second activity to evolve your Pawlie.
        </p>
        <div className="flex gap-2 items-center w-full">
          <p className="text-[#BCBCBC] text-sm uppercase font-bold">
            How to play
          </p>
          <div className="h-[1px] bg-[#BCBCBC] flex-grow"></div>
        </div>
        <ul role="list" className="space-y-2 text-gray-600">
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-900">Be quick.</strong>{" "}
              Move your body to an empty part of the screen
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-900">Goal.</strong>{" "}
              Collect points for each successful move
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-900">Time.</strong> Do
              a Challenge until time runs out
            </span>
          </li>
        </ul>
      </div>
      {!isMobile && <div
        style={{
          height: "62vh",
        }}
        className="overflow-hidden rounded-xl  w-full max-w-xl mt-4 mb-10"
      >
        {/* Back button on the left top corner */}
        <a
          href="/"
          className="absolute left-0 top-0 m-4 p-2 rounded-full bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <iframe
          scrolling="no"
          src="game.html"
          title="Game"
          style={{
            
            width: "100%",
            height: "100%",
            border: "none"
          }}
        />
      </div>}
      {canContinue && <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all"
          onClick={() => nextStep()}
        >
          Join the Community!
        </button>}
    </div>
  );
}

export default QScreenChallenge;
