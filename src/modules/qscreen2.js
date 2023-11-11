import React, { useState } from 'react';
import './styles.css';

function QScreen2({nextStep, prevStep}) {
  const [selectedChallenge, setSelectedChallenge] = useState('');

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-6 max-w-4xl">
        What's your biggest challenge in staying active?
      </h2>

      <div className="flex gap-4 mb-8">
        <div className="h-12 w-24 bg-neutral rounded-full">
        <div className="frame1">
          <div className="text-wrapper">😥 Lack of motivation</div>
         </div>
        </div>
        <div className="h-12 w-24 bg-neutral rounded-full">
        <div className="frame2">
          <p className="text-wrapper">🥸 No fun in exercise</p>
        </div>
        </div>
        <div className="h-12 w-24 bg-neutral rounded-full">
        <div className="frame3">
          <p className="don-t-know-where-to">⁉️Don&#39;t know where to start</p>
        </div>

        </div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="text-lg font-medium text-center px-8 py-3 bg-neutral hover:bg-neutral-hover rounded-full text-dark transition-all" onClick={() => prevStep()}>
          Back
        </button>
        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => nextStep()}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default QScreen2;
