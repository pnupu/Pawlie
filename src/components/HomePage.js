// src/components/HomePage.js
import React, { useState } from "react";
import Phone from "../modules/phone";
import PhoneNav from "../modules/phonenav";
import CampaignScreen from "../modules/campaignscreen";
import PawlieScreen from "../modules/pawliescreen";
import LeaderboardScreen from "../modules/leaderboardscreen";
// ... any other imports

function HomePage() {
  const [selected, setSelected] = useState("campaign");

  // Render the selected component
  const renderSelectedScreen = () => {
    switch (selected) {
      case "campaign":
        return <CampaignScreen />;
      case "pawlie":
        return <PawlieScreen  />;
      case "leaderboard":
        return <LeaderboardScreen />;
      // ... other cases for different screens
      default:
        return <CampaignScreen />;
    }
  };

  return (
    <Phone>
      <div id="main-content" className="grow flex flex-col overflow-y-auto">
        {renderSelectedScreen()}
      </div>
      <PhoneNav selected={selected} setSelected={setSelected} />
    </Phone>
  );
}

export default HomePage;
