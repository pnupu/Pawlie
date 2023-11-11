function QScreen2() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-6 max-w-4xl">
        What's your biggest challenge in staying active?
      </h2>

      <div className="flex gap-4 mb-8">
        <div className="h-12 w-24 bg-neutral rounded-full"></div>
        <div className="h-12 w-24 bg-neutral rounded-full"></div>
        <div className="h-12 w-24 bg-neutral rounded-full"></div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="text-lg font-medium text-center px-8 py-3 bg-neutral hover:bg-neutral-hover rounded-full text-dark transition-all">
          Back
        </button>
        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all">
          Continue
        </button>
      </div>
    </div>
  );
}

export default QScreen2;
