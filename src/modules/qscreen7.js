function QScreen7({ nextStep}) {
  return (
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-2xl">
          Pawlies are smart
        </h2>
        <img src="/challenges-min.jpg" className="max-w-2xl w-full"></img>
        <p className="text-lg md:text-xl text-dark-secondary text-center mt-8 max-w-2xl">
          See your activities autodetected. Pawlie detects 5 activity types from phones and up to 18 from if you have a compatible wearable.
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
  