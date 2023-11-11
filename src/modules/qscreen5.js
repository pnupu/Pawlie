function QScreen3({ nextStep}) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-2 max-w-3xl">
        Meet your personalised Pawlie!
      </h2>
      <div className="bg-gray rounded-xl w-full"></div>
      <p className="text-xl text-dark-secondary text-center my-8 max-w-xl">
        Here's your custom-made Pawlie, inspired by you! Together, you'll
        conquer fitness challenges with style!
      </p>

      <div className="flex gap-4 items-center">
        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => nextStep()}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default QScreen3;
