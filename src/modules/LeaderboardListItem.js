import React from "react";

const LeaderboardListItem = ({ name, points, highscore, position, src }) => {
  // Define styles for different positions
  const styles = {
    gold: {
      borderColor: "#E6B600",
      backgroundColor: "#FFF8DF",
      color: "#C09800",
    },
    silver: {
      borderColor: "#CCCCCC",
      backgroundColor: "#F4F4F4",
      color: "#707070",
    },
    bronze: {
      borderColor: "#D6743E",
      backgroundColor: "#F6EDE6",
      color: "#D6743E",
    },
    other: {
      borderColor: "#CCCCCC",
      backgroundColor: "#FFFFFF",
      color: "#707070",
    },
  };

  const positionStyle = {
    width: '1em', // Set a fixed width sufficient for two characters
    display: 'inline-block', // Use inline-block for width to take effect
    textAlign: 'center', // Center the text to handle one or two digit numbers uniformly
  };
  // Determine the style based on the position
  let style;
  switch (position) {
    case 1:
      style = styles.gold;
      break;
    case 2:
      style = styles.silver;
      break;
    case 3:
      style = styles.bronze;
      break;
    default:
      style = styles.other;
      break;
  }

  return (
    <div className="flex gap-4 items-center">
      <span className="text-dark" style={positionStyle}>{position}</span>
      <div
        className={`flex flex-grow border-2 rounded-lg overflow-hidden items-center`}
        style={{
          borderColor: style.borderColor,
          backgroundColor: style.backgroundColor,
        }}
      >
        <img src={src} className="aspect-square object-cover w-12" />
        <div className="grid grid-cols-5 gap-2 flex-grow px-3 py-2">
          <span
            className="font-bold uppercase col-span-3 truncate"
            style={{ color: style.color }}
          >
            {name}
          </span>
          <span className="font-medium" style={{ color: style.color }}>
            {points}
          </span>
          <span className="font-medium" style={{ color: style.color }}>
            {highscore}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardListItem;
