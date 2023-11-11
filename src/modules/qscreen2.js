import React, { useState } from "react";

function QScreen2({ nextStep, prevStep}) {
  const [isActiveFirst, setIsActiveFirst] = useState(false);
  const [isActiveSecond, setIsActiveSecond] = useState(false);
  const [isActiveThird, setIsActiveThird] = useState(false);
  const toggleActiveFirst = () => {
    setIsActiveFirst(!isActiveFirst);
  };

  const toggleActiveSecond = () => {
    setIsActiveSecond(!isActiveSecond);
  };

  const toggleActiveThird = () => {
    setIsActiveThird(!isActiveThird);
  };

  const activeStyle = {
    padding: "12px 20px", // Equivalent to py-3 px-5
    border: "2px solid #695EFC", // Equivalent to border-2 border-[#695EFC]
    borderRadius: "9999px", // Equivalent to rounded-full
    textAlign: "center",
    fontWeight: "500", // Equivalent to font-medium
    cursor: "pointer",
    backgroundColor: "#EDECFF", // Equivalent to bg-[#EDECFF]
  };

  const inactiveStyle = {
    padding: "12px 20px", // Equivalent to py-3 px-5
    border: "1px solid #D2D2D2", // Equivalent to border border-[#D2D2D2]
    borderRadius: "9999px", // Equivalent to rounded-full
    textAlign: "center",
    fontWeight: "500", // Equivalent to font-medium
    cursor: "pointer",
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-6 max-w-4xl">
        What's your biggest challenge in staying active?
      </h2>

      <div className="flex gap-4 mb-8">
        <div
          style={isActiveFirst ? activeStyle : inactiveStyle}
          onClick={toggleActiveFirst}
        >
          😥 Lack of motivation
        </div>
        <div
          style={isActiveSecond ? activeStyle : inactiveStyle}
          onClick={toggleActiveSecond}
        >
          🥸 No fun in exercise
        </div>
        <div
          style={isActiveThird ? activeStyle : inactiveStyle}
          onClick={toggleActiveThird}
        >
          ⁉️ Don't know where to start
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
