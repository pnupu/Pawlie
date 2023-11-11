function QScreen1({ nextStep }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-black uppercase text-center mb-6">
        Embark on a Fitness Adventure with Pawlie
      </h1>
      <p className="text-xl text-dark-secondary text-center mb-8 max-w-xl">
        Create your companion, overcome fitness challenges, and engage in a
        motivating community!
      </p>
      <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => nextStep()}>
        Start Your Journey
      </button>
    </div>
  );
}

export default QScreen1;
