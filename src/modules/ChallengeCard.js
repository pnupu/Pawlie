import React from "react";

const ChallengeCard = ({ type, challengeName, onStart }) => {
  let cardStyles = "p-4 flex justify-between rounded-lg items-center ";
  let textStyles = "font-bold uppercase ";
  let boxShadow, borderColor, bgColor, textColor, button, icon;

  switch (type) {
    case "completed":
      boxShadow = "0px 4px 0px 0px #CCCCCC";
      borderColor = "border-[#CCCCCC]";
      bgColor = "bg-white";
      textColor = "text-[#707070]";
      icon = (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.2071 9.70711C17.5976 9.31658 17.5976 8.68342 17.2071 8.29289C16.8166 7.90237 16.1834 7.90237 15.7929 8.29289L10.5 13.5858L8.20711 11.2929C7.81658 10.9024 7.18342 10.9024 6.79289 11.2929C6.40237 11.6834 6.40237 12.3166 6.79289 12.7071L9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L17.2071 9.70711Z"
            fill="rgb(59 197 39)"
          />
        </svg>
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
      {type === "completed" && icon}
      {button}
    </div>
  );
};

export default ChallengeCard;
