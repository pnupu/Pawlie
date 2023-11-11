import { useState } from 'react';
import {QrScanner} from '@yudiel/react-qr-scanner';
import toast, { Toaster }from 'react-hot-toast';

const challenges = {
  1: {
    id: "1",
    title: "Run up the stairs",
    instructions: "You found the first challenge, run up the stairs and on the left scan the QR code to receive your first points",
    score: 20,
    end: ["4"],
  },
  5: {
    id: "5",
    title: "Free Challenge",
    duration: 300,
    score: [15, 30, 50],
    end: ["6", "7", "8"],
  }
}

function QRChallenge() {
  const [currChallenge, setCurrChallenge] = useState(null);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

 

  return (

       <div
      style={{
        background: "linear-gradient(45deg, #2F80ED, #56CCF2)",
      }}
      className="min-h-screen p-3 md:p-4 flex flex-col justify-center"
    >

        <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden bg-white rounded-2xl p-4 md:p-16">
  
      <a
          href="/"
          className="absolute left-0 top-0 m-4 p-2 rounded-full"
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
      <h1 className="text-2xl mt-12 md:text-4xl font-black uppercase text-center mb-6">
        Scan a QR code to start a challenge
      </h1>
        {countdown && <div className='mx-auto text-lg md:text-xl text-dark-secondary  text-center mb-8 max-w-xl' style={{fontSize: 20}}>Countdown: {countdown}</div>}
        {currChallenge?.instructions && <div className='mx-auto text-lg md:text-xl text-dark-secondary text-center mb-8 max-w-xl' style={{fontSize: 20}}>Instructions: {currChallenge.instructions}</div>}
        {currChallenge && <div className='mx-auto text-lg md:text-xl text-dark-secondary text-center mb-8 max-w-xl' style={{fontSize: 20}}>Current Challenge: {currChallenge.title}</div>}
      <div className='mx-auto w-96 rounded h-96 max-h-full max-w-full'>
      <QrScanner
          containerStyle={{borderRadius: 10}}
          onDecode={(result) => {            
            if (currChallenge && currChallenge?.end.filter(endId => endId === result.toString()).length > 0) {
              const endIdIndex = currChallenge?.end.indexOf(result.toString());
              let rewardedScore;
              if (endIdIndex !== -1 && Array.isArray(currChallenge.score)) {
                rewardedScore = currChallenge.score[endIdIndex];
              } else {
                alert('smth went wrong');
                return;
              }

              let newScore;
              if (currChallenge.duration) {
                const endTime = new Date();
                const timeTaken = (endTime - startTime) / 1000; // in seconds

                if (timeTaken <= currChallenge.duration) {
                  const proportionOfTimeUsed = timeTaken / currChallenge.duration;
                  const scoreReduction = rewardedScore * Math.pow(proportionOfTimeUsed, 2);
                  newScore = score + Math.round((rewardedScore - scoreReduction));
                } else {
                  newScore = score;
                }
              }
              
              
              newScore = newScore || score + rewardedScore;
              if (newScore !== score) {
                toast.success(`You have completed the challenge and earned ${rewardedScore} points!`);
              } else {
                toast("You have completed the challenge, but you did not earn any points, as the time ran out 😩")
              }
              
              setScore(newScore);
              clearInterval(intervalId);
              setIntervalId(null);
              setCurrChallenge(null);
              setCountdown(null);
              setStartTime(null);
              return;     
            } else if (currChallenge && !currChallenge?.end.includes(result.toString()) && currChallenge?.id !==  result.toString()) {
              alert("Almost there, but this QR code is not part of the current challenge")
              return;
            }


            const challenge = challenges[result.toString()];

            if (challenge && challenge.duration && !countdown) {
              setCountdown(challenge.duration);
              setStartTime(new Date());
              const timer = setInterval(() => {
                setCountdown(countdown => {
                  if (countdown < 0) {
                    clearInterval(timer);
                    return countdown;
                  }
                  return countdown - 1;
                });
              }, 1000);

                setIntervalId(timer);
            }


            if (currChallenge == null) {
              setCurrChallenge(challenge);
              return;
            }

            
          }}
          onError={(error) => console.log(error?.message)}
        />
              </div>

        
        <div className='text-lg md:text-xl mx-auto text-dark-secondary text-center mb-8 max-w-xl' style={{fontSize: 20}}>Points: {score}</div>
        <Toaster/>
      </div>
      </div>

      </div>  
      );
}

export default QRChallenge;
