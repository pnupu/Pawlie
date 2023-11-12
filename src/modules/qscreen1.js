function QScreen1({ nextStep }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/hero-cover-min.jpg"
        className="absolute top-0 w-full h-[300px] md:h-[30vh] object-cover"
      ></img>
      <div className="h-[320px] md:h-[30vh]"></div>
      <h1 className="text-4xl md:text-6xl font-black uppercase text-center mb-6">
        Spaw-t is the new sport
      </h1>
      <p className="text-lg md:text-xl text-dark-secondary text-center mb-8 max-w-xl">
       Your unique companion to achieve your athletic aspirations.
      </p>
      <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => nextStep()}>
        Start Your Journey
      </button>
    </div>
  );
}

  export default QScreen1;
  