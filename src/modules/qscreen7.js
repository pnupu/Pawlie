function QScreen7({ nextStep}) {
  return (
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-2xl">
          Conquer Challenges, Reap Rewards!
        </h2>
        <img src="/challenges-min.jpg" className="max-w-2xl w-full"></img>
        <p className="text-lg md:text-xl text-dark-secondary text-center mt-8 max-w-2xl">
          Dive into a variety of fun challenges to collect points. Each success
          not only boosts your fitness but also propels you and Pawlie to exciting
          new heights, unlocking amazing rewards!
        </p>
  
        <div className="flex gap-4 items-center mt-8">
          <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => nextStep()}>
            Continue
          </button>
        </div>
      </div>
    );
  }
  
  export default QScreen7;
  