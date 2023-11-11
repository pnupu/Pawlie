import LeaderboardListItem from "./LeaderboardListItem";

function LeaderboardScreen() {
  return (
    <div className="flex-grow flex flex-col overflow-y-auto p-5 md:p-6 ">
      <h1 className="text-2xl font-bold uppercase mb-8">Leaderboard</h1>
      <p className="text-dark font-medium text-xl">Junction Hackathon 2023</p>
      <p className="text-[#848484] text-xl font-medium">Time left: 1 day</p>
      <div id="content" className="flex flex-col flex-grow ">
        <div className="flex justify-end mb-2 gap-4 mr-7">
          <span className="font-medium text-sm  text-[#707070]">Score</span>
          <span className="font-medium text-sm text-[#707070]">Stars</span>
        </div>
        <div id="list" className="flex flex-col gap-2">
          <LeaderboardListItem
            name={"Rokas"}
            points={"10"}
            highscore={"50"}
            position={1}
            src={"/hero-cover-min.jpg"}
          ></LeaderboardListItem>
          <LeaderboardListItem
            name={"Rokas"}
            points={"10"}
            highscore={"50"}
            position={2}
            src={"/hero-cover-min.jpg"}
          ></LeaderboardListItem>
          <LeaderboardListItem
            name={"Rokas"}
            points={"10"}
            highscore={"50"}
            position={3}
            src={"/hero-cover-min.jpg"}
          ></LeaderboardListItem>
          <LeaderboardListItem
            name={"Rokas"}
            points={"10"}
            highscore={"50"}
            position={4}
            src={"/hero-cover-min.jpg"}
          ></LeaderboardListItem>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardScreen;
