import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChallengeCard from "./ChallengeCard";
import toast, { Toaster }from 'react-hot-toast';


function CampaignScreen() {
  const navigate = useNavigate(); // This hook allows you to navigate programmatically
    const isMobile = navigator.userAgentData.mobile;

  const [user, setUser] = useState(null);
  useEffect(() => {
    // Load the user from localStorage when the component mounts
    const loadedUser = localStorage.getItem("user");
    if (loadedUser) {
      setUser(JSON.parse(loadedUser));
      console.log("User loaded from localStorage!");
      console.log(JSON.parse(loadedUser));
    }
  }, []);


  return (
    <div className="flex-grow flex flex-col overflow-y-auto p-6 md:p-8">
      <h1 className="text-2xl font-bold uppercase mb-8">Your Campaign</h1>

      <div id="content" className="flex flex-col gap-5 flex-grow ">
        <ChallengeCard
          type="completed"
          onStart={() => {
            if (isMobile) {
              toast("Please use your laptop to play this game.", {
                icon: '💻',
                duration: 5000,
              })
              return
            }
            navigate("/jump-game")
          }}
          challengeName="Jump Game"
        />


        <ChallengeCard
          type={user?.highScores?.game2 > 0 ? "completed" : "active"}
          challengeName="Climb the mountain"
          onStart={() => navigate("/qr-game-mountain")}
        />

        <ChallengeCard 
          type={
            user?.highScores?.game2 === 0
              ? "disabled"
              : user?.highScores?.game3 > 0
              ? "completed"
              : "active"
          }
          onStart={() => navigate("/qr-game-table")}

        challengeName="Visit the creators" />

        <div id="divider" className="flex gap-3 items-center w-full py-2">
          <p className="text-[#BCBCBC] text-sm uppercase font-bold">Level 2</p>
          <div className="h-[1px] bg-[#d6d6d6] flex-grow"></div>
        </div>

        <ChallengeCard type="disabled" challengeName="Challenge 4" />

        <ChallengeCard type="disabled" challengeName="Challenge 5" />

        <ChallengeCard type="disabled" challengeName="Challenge 6" />

        <div id="divider" className="flex gap-3 items-center w-full py-2">
          <p className="text-[#BCBCBC] text-sm uppercase font-bold">Level 3</p>
          <div className="h-[1px] bg-[#d6d6d6] flex-grow"></div>
        </div>

        <ChallengeCard type="disabled" challengeName="Challenge 7" />

        <ChallengeCard type="disabled" challengeName="Challenge 8" />

        <ChallengeCard type="disabled" challengeName="Challenge 9" />
        <ChallengeCard type="disabled" challengeName="Challenge 10" />
      </div>
      <Toaster/>
    </div>
  );
}

export default CampaignScreen;
