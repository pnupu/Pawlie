function LeaderboardScreen() {
  return (
    <div className="flex-grow flex flex-col overflow-y-auto p-5 md:p-6">
      <h1 className="text-2xl font-bold uppercase mb-8">Leaderboard</h1>
      <p className="text-dark font-medium text-lg">Junction Hackathon 2023</p>
      <p className="text-[#848484] font-medium">Time left: 1 day</p>
      <div id="content" className="flex flex-col flex-grow ">
        <div id="list">
          <div className="flex gap-4 items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardScreen;
