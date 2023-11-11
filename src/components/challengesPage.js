import React, { useState, useEffect } from 'react';
import './quiz.css';
import 'tailwindcss/tailwind.css';

const ChallengesPage = () => {
  const initialChallenges = ['selected', 'notSelected', 'notSelected', 'locked', 'locked'];
  
  const [challenges, setChallenges] = useState(initialChallenges);

  const borderStyle = (challengeState) => {
    switch (challengeState) {
      case 'selected':
        return 'border-2 border-[#4D8EFF]';
      case 'notSelected':
        return 'border-2 border-[#CCC]';
      case 'locked':
        return 'border-2 border-dotted border-[#CCC]';
      default:
        return 'border-2 border-blue-500';
    }
  };

  return (
    <div style={{ background: "linear-gradient(45deg, #2F80ED, #56CCF2)" }} className="min-h-screen p-3 md:p-4 flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-white rounded-2xl p-4 md:p-16 w-[500px] h-[700px]">
          {challenges.map((state, index) => (
            <React.Fragment key={index}>
              {index === 2 && (
                <div className="flex flex-row items-center text-center my-4">
                  <p className="bg-white px-2 -mt-3 text-sm text-gray-500">Level 2</p>
                  <div className="h-[3px] w-[317px] border-[#CCC]"></div>
                </div>
              )}
              <div className={`flex flex-row mb-[20px] items-center justify-between p-4 rounded-lg bg-white shadow h-[46px] w-[408px] ${borderStyle(state)}`}>
                {/* Challenge content here */}
              </div>
            </React.Fragment>
          ))}

          <div className="flex flex-row absolute bottom-[0px] justify-center mt-8">
            {/* place bottomtabs here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
