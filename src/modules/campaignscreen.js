import ChallengeCard from "./ChallengeCard";

function CampaignScreen() {
  return (
    // <div className="flex flex-col p-4 md:p-8 overflow-y-auto grow">
    //   <h1 className="mb-8 text-2xl font-bold uppercase sticky top-0">
    //     Your Campaign
    //   </h1>
    //   <div className="flex flex-col gap-3 grow bg-black h-[2000px] w-full overflow-y-auto">
    //     <div id="challenge button" className=""></div>
    //   </div>
    // </div>

    <div className="flex-grow flex flex-col overflow-y-auto p-6 md:p-8">
      <h1 className="text-2xl font-bold uppercase mb-8">Your Campaign</h1>

      <div id="content" className="flex flex-col gap-5 flex-grow ">
        <ChallengeCard type="completed" challengeName="Challenge 1" />

        <ChallengeCard
          type="active"
          challengeName="Challenge 2"
          onStart={() => console.log("Challenge started!")}
        />

        <ChallengeCard type="disabled" challengeName="Challenge 3" />

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
    </div>
  );
}

export default CampaignScreen;
