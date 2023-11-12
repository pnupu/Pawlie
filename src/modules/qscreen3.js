function QScreen3({ nextStep, prevStep}) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-2 max-w-3xl">
          Join us, create your own unique Pawlie
        </h2>
        <img src="/pawlie-cover-2-min.jpg"></img>
        <p className="text-lg md:text-xl text-dark-secondary text-center mt-6 max-w-xl">
         There are many Pawlies around playing and having fun in s-paw-ts.
        </p>
  
        <div className="flex gap-4 items-center mt-8">
          <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => nextStep()}>
            Continue
          </button>
        </div>
      </div>
    );
  }
  
  export default QScreen3;
  