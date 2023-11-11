function QScreen5() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8 max-w-3xl">
        Meet your personalised Pawlie!
      </h2>
      <div id="pawlie" className="relative p-6 max-w-full mx-auto">
        <img
          className="aspect-square object-cover max-w-sm w-full rounded-2xl"
          src="/pawlie-cover-2-min.jpg "
        ></img>
      </div>
      <p className="text-lg md:text-xl text-dark-secondary text-center my-8 max-w-xl">
        Here's your custom-made Pawlie, inspired by you! Together, you'll
        conquer fitness challenges with style!
      </p>

      <div className="flex gap-4 items-center">
        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all">
          Continue
        </button>
      </div>
    </div>
  );
}

export default QScreen5;
