import React, { useEffect, useState } from 'react';

function QScreenLoading() {
  const [dots, setDots] = useState('');

  useEffect(() => {

    const dotAnimation = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    return () => {
      clearInterval(dotAnimation);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-black uppercase text-center max-w-xl">
        Crafting your Pawlie{dots}
      </h2>
      <p className="text-lg md:text-xl text-dark-secondary text-center mt-6 max-w-xl">
        Hang tight, a few seconds left
      </p>
    </div>
  );
}

export default QScreenLoading;
