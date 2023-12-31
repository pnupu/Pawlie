function QScreen4({ nextStep, toggleModal }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-2 max-w-xl">
        Now, Let’s Bring Your Pawlie to Life!
      </h2>
      <p className="text-lg md:text-xl text-dark-secondary text-center mt-6 mb-8 max-w-md">
        Snap a photo! Your Pawlie will look like you, and mirror your style!
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 w-full">
        <div className="overflow-hidden relative rounded-xl bg-[#F4F8FF] min-h flex flex-col items-center pt-12 min-h-[400px]">
          <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={() => toggleModal()}>
            Select image
          </button>
          <img
            src="/locked-avatar-min.png"
            className="absolute bottom-0 w-full max-h-[70%] object-contain"
          ></img>
        </div>
      </div>
      <button className="text-md font-medium text-center px-6 py-2 bg-white hover:bg-neutral rounded-full text-dark transition-all mt-6" onClick={() => nextStep(true)}>
        Don't have picture? Generate randomly
      </button>
    </div>
  );
}

export default QScreen4;

