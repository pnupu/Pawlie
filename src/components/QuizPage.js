import React, { useState } from 'react';
import './quiz.css';
import QScreen1 from "../modules/qscreen1";
import QScreen2 from "../modules/qscreen2";
import QScreen3 from "../modules/qscreen3";
import QScreen4 from "../modules/qscreen4";
import QScreen5 from "../modules/qscreen5";
import QScreenLoading from "../modules/qscreenloading";
import 'tailwindcss/tailwind.css';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  }

  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return <QScreen1 nextStep={nextStep} />;
      case 2:
        return <QScreen2 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <QScreen3 nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <QScreen4 nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <QScreenLoading nextStep={nextStep}/>;
      case 6:
        return <QScreen5 nextStep={nextStep} prevStep={prevStep} />;
      default:
        return <QScreen1 nextStep={nextStep} prevStep={prevStep} />;
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #2F80ED, #56CCF2)",
      }}
      className="min-h-screen p-4 flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl p-16">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
