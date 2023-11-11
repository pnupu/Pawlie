function QScreen3() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-2 max-w-3xl">
        Meet Pawlie, your dedicated fitness companion!
      </h2>
      <img src="/pawlie-cover-2-min.jpg"></img>
      <p className="text-xl text-dark-secondary text-center mt-6 max-w-xl">
        Create your companion, overcome fitness challenges, and engage in a
        motivating community!
      </p>

      <div className="flex gap-4 items-center mt-8">
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

export default QScreen3;
