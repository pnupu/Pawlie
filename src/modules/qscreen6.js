function QScreen6({nextStep}) {
  return (
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-3xl">
          Develop your Pawlie
        </h2>
        <img src="/levels-min.jpg"></img>
        <p className="text-lg md:text-xl text-dark-secondary text-center mt-8 max-w-2xl">
         Activity and rest measurements level up your Pawlie and with time it will start to showcase your hobbies!
        </p>
  
        <div className="flex gap-4 items-center mt-8">
          <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => nextStep()}>
            Continue
          </button>
        </div>
      </div>
    );
  }
  
  export default QScreen6;
  