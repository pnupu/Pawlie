import { useState } from 'react';
import {QrScanner} from '@yudiel/react-qr-scanner';

const challenges = {
  1: {
    title: "Challenge 1",
    instructions: "Scan the QR code",
    score: 15,
    end: 2,
  },
  3: {
    title: "Time between",
    instructions: "Scan the QR code",
    end: 4,
    score: 30,
    duration: 60 // in seconds
  }
}

function QRChallenge() {
  const [currChallenge, setCurrChallenge] = useState(null);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  return (
    <>
      <QrScanner
          onDecode={(result) => {            
            if (currChallenge && currChallenge.end.toString() === result.toString()) {
              let newScore;
              if (currChallenge.duration) {
                const endTime = new Date();
                const timeTaken = (endTime - startTime) / 1000; // in seconds

                if (timeTaken <= currChallenge.duration) {
                  const proportionOfTimeUsed = timeTaken / currChallenge.duration;
                  const scoreReduction = currChallenge.score * Math.pow(proportionOfTimeUsed, 2);
                  newScore = score + Math.round((currChallenge.score - scoreReduction));
                } else {
                  newScore = score;
                }
              }

              newScore = newScore || score + currChallenge.score;
              
              setScore(newScore);
              clearInterval(intervalId);
              setIntervalId(null);
              setCurrChallenge(null);
              setCountdown(null);
              setStartTime(null);
              return;
            } else if (currChallenge && currChallenge.end.toString() !== result.toString()) {
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
        {countdown && <div style={{fontSize: 20}}>Countdown: {countdown}</div>}
        {currChallenge && <div style={{fontSize: 20}}>Current Challenge: {currChallenge.title}</div>}
        <div style={{fontSize: 20}}>Score: {score}</div>
      </>
  );
}

export default QRChallenge;
