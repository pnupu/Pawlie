import { useState } from 'react';
import {QrScanner} from '@yudiel/react-qr-scanner';
import toast, { Toaster }from 'react-hot-toast';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

const challenges = {
  1: {
    id: "1",
    title: "Run up the stairs",
    instructions: "Quickly run up the stairs and scan QR on the left.",
    duration: 30,
    score: [20],
    end: ["4"],
  },
  5: {
    id: "5",
    title: "Free Challenge",
    duration: 300,
    score: [15, 30, 50],
    end: ["6", "7", "8"],
  },
  12: {
    id: "12",
    title: "Free Challenge",
    score: [25],
    end: ["12"],
  }
}

function QRChallenge({whereToFind, onFound, fromSignIn}) {
  const [currChallenge, setCurrChallenge] = useState(null);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [found, setFound] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <div className='flex flex-col justify-center justify-content'>
      <h1 className="text-2xl mt-12 md:text-4xl font-black uppercase text-center mb-6">
        Scan a QR code to start a challenge
      </h1>
        {whereToFind && !found &&
        <Alert text={whereToFind}></Alert>
        }
        {countdown && <div className='mx-auto text-lg md:text-xl text-dark-secondary  text-center mb-8 max-w-xl' style={{fontSize: 20}}>Countdown: {countdown}</div>}
        {currChallenge?.instructions && <div style={{animation: "blink 1s linear infinite", fontSize: 20}} className='mx-auto text-lg md:text-xl text-dark-secondary text-center mb-8 max-w-xl'>Instructions: {currChallenge.instructions}</div>}
      <div className='mx-auto w-96 rounded h-96 max-h-full max-w-full'>
      <QrScanner
          containerStyle={{borderRadius: 10}}
          onDecode={(result) => {
            if ((currChallenge && currChallenge?.end.filter(endId => endId === result.toString()).length > 0) || result.toString === "12") {
              const endIdIndex = currChallenge?.end.indexOf(result.toString());
              let rewardedScore;
              if (endIdIndex !== -1 && Array.isArray(currChallenge.score)) {
                rewardedScore = currChallenge.score[endIdIndex];
              } else {
                alert('smth went wrong. Please report to us, so we can fix 🫶');
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
              
              
              if(score === 0) {

              
              newScore = newScore || score + rewardedScore;

              if (newScore !== score) {
                toast.success(`You have completed the challenge and earned ${rewardedScore} points!`);
                setCompleted(true);
              } else {
                toast("You have completed the challenge, but you did not earn any points, as the time ran out 😩")
                setCompleted(true);
              }
              if (localStorage.getItem('qrScore') == null) {
                localStorage.setItem('qrScore', newScore);
              }

              if (localStorage.getItem('qrScore') && parseInt(localStorage.getItem('qrScore')) <= newScore) {
                if (localStorage.getItem("user")) {
                let user = JSON.parse(localStorage.getItem('user'));
                let data = {
                    highScores: {
                        game1: user.highScores.game1,
                        game2: user.highScores.game2,
                        game3: newScore,
                    },
                }

                fetch('https://server.getpawlie.com/users/'+ user.id +'/score', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Could not update high score');
                    }
                }).then(updatedUser => {
                    console.log('High score updated:', updatedUser);
                    // Optionally update the local storage with the new high score
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                }).catch(error => {
                    console.error('Error:', error);
                });
              }


                localStorage.setItem('qrScore', newScore);
              }

              

              
              
                setScore(newScore);
                clearInterval(intervalId);
                setIntervalId(null);
                setCurrChallenge(null);
                setCountdown(null);
                setStartTime(null);
              }
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
                  if (countdown <= 0) {
                    clearInterval(timer);
                    setCountdown(null);
                    setCurrChallenge(null);
                    setStartTime(null);
                    alert("Time's up! You did not complete the challenge in time 😩");
                    setCompleted(true);
                    return countdown;
                  }
                  return countdown - 1;
                });
              }, 1000);

                setIntervalId(timer);
            }


            if (currChallenge == null) {
              setFound(true);
              setCurrChallenge(challenge);
              return;
            }

            
          }}
          onError={(error) => console.log(error?.message)}
        />
                      

              </div>

        

        <div className='text-lg md:text-xl mx-auto text-dark-secondary text-center mb-8 max-w-xl' style={{fontSize: 30}}>Visit the table of the creators next to the snacks and strais.</div>
        <div className='text-lg md:text-xl mx-auto text-dark-secondary text-center mb-8 max-w-xl' style={{fontSize: 20}}>Points: {score}</div>
        {fromSignIn && completed && <button className="text-lg self-center font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all"
          onClick={() => {
            localStorage.setItem('qrScore', score);
            onFound();
          }}
                          >
                            Join the Community!
        </button>}
        <Toaster/>
        </div>
   
      );
}

export const Wrapper = ({children}) => {
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
        {children}

    </div>
      </div>

      </div> 
  )
  
}

const Alert = ({text}) => {
  return (
    <div className="rounded-md bg-yellow-50 p-4 mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
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

export default QRChallenge;
