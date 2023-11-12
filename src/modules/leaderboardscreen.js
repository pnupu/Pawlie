import React, { useEffect, useState } from 'react';
import LeaderboardListItem from "./LeaderboardListItem";

function LeaderboardScreen() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Function to fetch data from the endpoint
    const fetchPlayers = async () => {
      const response = await fetch('https://server.getpawlie.com/highscores'); // Replace with your actual endpoint
      const data = await response.json();
      console.log(data)
      setPlayers(data);
    };

    fetchPlayers().catch(console.error); // Execute the fetch and log any errors
  }, []); // Empty dependency array means this effect will only run once on mount
  const calculateStars = (highScores) => {

    let stars = 0;
    console.log(highScores);
    Object.values(highScores).forEach(score => {
      if (score >= 10) {
        // One star for reaching 10 points
        stars += 1;
        // Additional stars for each 10 points over the initial 10
        stars += Math.floor((score - 10) / 10);
      }
    });
    return stars;
  };
  return (
    <div className="flex-grow flex flex-col overflow-y-auto p-5 md:p-6">
      <h1 className="text-2xl font-bold uppercase mb-8">Leaderboard</h1>
      <p className="text-dark font-medium text-xl">Junction Hackathon 2023</p>
      <p className="text-[#848484] text-xl font-medium">Time left: 1 day</p>
      <div id="content" className="flex flex-col flex-grow ">
        <div className="flex justify-end mb-2 gap-4 mr-7">
          <span className="font-medium text-sm  text-[#707070]">Score</span>
          <span className="font-medium text-sm text-[#707070]">Stars</span>
        </div>
        <div id="list" className="flex flex-col gap-2">
          {players.map((player, index) => (
            <LeaderboardListItem
              key={index} // It's better to use unique ids if they are available
              name={player.username}
              points={player.totalScore.toString()} // Ensure this is a string if your component expects a string
              highscore={calculateStars(player.highScores)} // Assuming you want to display the highest individual game score
              position={index + 1} // Position in the list
              src={player.localimageurl || "rabbits/rabbit_no_female_medium.png"} // Placeholder image, replace with your logic if necessary
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardScreen;
