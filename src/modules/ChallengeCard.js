import React from "react";

const ChallengeCard = ({ type, challengeName, onStart }) => {
  let cardStyles = "p-4 flex justify-between rounded-lg items-center ";
  let textStyles = "font-bold uppercase ";
  let boxShadow, borderColor, bgColor, textColor, button;

  switch (type) {
    case "completed":
      boxShadow = "0px 4px 0px 0px #CCCCCC";
      borderColor = "border-[#CCCCCC]";
      bgColor = "bg-white";
      textColor = "text-[#707070]";
      button = (
        <button
          className="px-5 py-1 bg-neutral hover:bg-neutral-hover text-dark rounded-full font-medium"
          onClick={onStart}
        >
          Do again
        </button>
      );
      break;
    case "active":
      boxShadow = "0px 4px 0px 0px #4D8EFF";
      borderColor = "border-[#4D8EFF]";
      bgColor = "bg-[#EDF3FF]";
      textColor = "text-[#4D8EFF]";
      button = (
        <button
          className="px-5 py-1 bg-primary hover:bg-primary-hover text-white rounded-full font-medium"
          onClick={onStart}
        >
          Start
        </button>
      );
      break;
    case "disabled":
      boxShadow = "0px 4px 0px 0px #CCCCCC";
      borderColor = "border-[#CCCCCC]";
      bgColor = "";
      textColor = "text-[#707070]";
      button = <span className="text-[#9a9a9a] font-medium">Locked</span>;
      break;
    default:
      return null;
  }

  return (
    <div
      id={`challenge-card-${type}`}
      style={{ boxShadow }}
      className={`${cardStyles} ${borderColor} ${bgColor} border-2`}
    >
      <span className={`${textStyles} ${textColor}`}>{challengeName}</span>
      {type === "completed"}
      {button}
    </div>
  );
};

export default ChallengeCard;
