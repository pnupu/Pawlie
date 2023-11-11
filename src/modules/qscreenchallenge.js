function QScreenChallenge() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-2xl">
        Let’s kickstart your journey!
      </h2>
      <div
        style={{
          boxShadow: "0px 4px 0px 0px #CCDEFF", // Added a blur radius of 4px
        }}
        className="rounded-xl p-5 border-[#4D8EFF] border-2 flex flex-col gap-4 items-start "
      >
        <p className="text-[#2198F3] text-sm uppercase font-bold">
          Challenge 1
        </p>
        <p className="text-lg">
          Complete this fun 30-second activity to evolve your Pawlie.
        </p>
        <div className="flex gap-2 items-center w-full">
          <p className="text-[#BCBCBC] text-sm uppercase font-bold">
            How to play
          </p>
          <div className="h-[1px] bg-[#BCBCBC] flex-grow"></div>
        </div>
        <ul role="list" className="space-y-2 text-gray-600">
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-900">Be quick.</strong>{" "}
              Move your body to an empty part of the screen
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-900">Goal.</strong>{" "}
              Collect points for each successful move
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-900">Time.</strong> Do
              a Challenge until time runs out
            </span>
          </li>
        </ul>
      </div>
      <div
        style={{
          aspectRatio: "9 / 16",
        }}
        className=" bg-neutral rounded-xl w-full max-w-xl my-10"
      ></div>

      <div className="flex gap-4 items-center">
        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all">
          Start a Challenge
        </button>
      </div>
    </div>
  );
}

export default QScreenChallenge;
