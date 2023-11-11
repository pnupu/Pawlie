function QScreen4() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center mb-2 max-w-xl">
        Now, Let’s Bring Your Pawlie to Life!
      </h2>
      <p className="text-xl text-dark-secondary text-center mt-6 mb-8 max-w-md">
        Snap a photo, and we'll magically create a Pawlie that mirrors your
        style!
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full">
        <div className="overflow-hidden relative rounded-xl bg-[#F4F8FF] min-h flex flex-col items-center pt-12 min-h-[400px]">
          <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all">
            Upload a photo
          </button>
          <img
            src="/locked-avatar-min.png"
            className="absolute bottom-0 w-full max-h-[70%] object-contain"
          ></img>
        </div>
        <div className="overflow-hidden relative rounded-xl bg-[#F4F8FF] min-h flex flex-col items-center pt-12 min-h-[400px]">
          <button className="text-lg font-medium text-center px-8 py-3 bg-neutral hover:bg-neutral-hover rounded-full text-dark transition-all">
            Generate automatically
          </button>
          <img
            src="/avatars-visible-min.png"
            className="absolute bottom-0 w-full max-h-[70%] object-cover object-top"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default QScreen4;
