import React, { useState } from 'react';

function QScreen2({ nextStep, prevStep }) {
  const [selectedChallenge, setSelectedChallenge] = useState('');

  const handleChange = (event) => {
    setSelectedChallenge(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-6 max-w-4xl">
        What's your biggest challenge in staying active?
      </h2>

      <form className="flex flex-col items-center">
        <label className="flex items-center mb-4">
          
          <input 
            type="radio" 
            name="challenge" 
            value="lack-of-motivation" 
            checked={selectedChallenge === 'lack-of-motivation'} 
            onChange={handleChange} 
            className="mr-2"
          />
          😥 Lack of motivation
        </label>
        
        <label className="flex items-center mb-4">
          <input 
            type="radio" 
            name="challenge" 
            value="no-fun" 
            checked={selectedChallenge === 'no-fun'} 
            onChange={handleChange} 
            className="mr-2"
          />
          🥸 No fun in exercise
        </label>
        
        <label className="flex items-center mb-4">
          <input 
            type="radio" 
            name="challenge" 
            value="dont-know-start" 
            checked={selectedChallenge === 'dont-know-start'} 
            onChange={handleChange} 
            className="mr-2"
          />
          ⁉️ Don't know where to start
        </label>

        <div className="flex gap-4 items-center mt-8">
          <button 
            type="button" 
            className="text-lg font-medium text-center px-8 py-3 bg-neutral hover:bg-neutral-hover rounded-full text-dark transition-all" 
            onClick={() => prevStep()}
          >
            Back
          </button>
          <button 
            type="button" 
            className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" 
            onClick={() => nextStep()}
            disabled={!selectedChallenge}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default QScreen2;
