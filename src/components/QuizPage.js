// Import React and useState hook
import React, { useState } from 'react';
import './quiz.css';
// Import Tailwind CSS styles
import 'tailwindcss/tailwind.css';

// Define each question as a separate component
const QuestionOne = ({ onNext }) => {
    return (
      <div className="flex flex-col items-center justify-center bg-gradient-custom h-screen">
        <h2 className="text-xl font-semibold mb-4 text-white">What is 1+1?</h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300" onClick={onNext}>Next</button>
      </div>
    );
  };

const QuestionTwo = ({ onNext }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">What is 2+2?</h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onNext}>Next</button>
      </div>
    );
  };

  const QuestionThree = ({ onNext }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">What is 3+3?</h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onNext}>Next</button>
      </div>
    );
  };
// ... Define components for QuestionTwo, QuestionThree, ..., QuestionSeven

// Main Quiz component that controls the flow
const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 7 ? prevStep + 1 : prevStep));
  };


  return (
    <div className="container mx-auto p-8">
      {currentStep === 1 && <QuestionOne onNext={nextStep} />}
      {currentStep === 2 && <QuestionTwo onNext={nextStep} />}
      {currentStep === 3 && <QuestionThree onNext={nextStep} />}
    </div>
  );
};

export default Quiz;
