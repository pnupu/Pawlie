import React, { useEffect, useState } from 'react';

function QScreenLoading({ nextStep }) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep();
    }, 2000);

    const dotAnimation = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotAnimation);
    };
  }, [nextStep]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-black uppercase text-center max-w-xl">
        Crafting your Pawlie{dots}
      </h2>
      <div className="text-xl text-dark-secondary text-center mt-6 max-w-xl">
        <p>Hang tight, a few seconds left</p>
      </div>
    </div>
  );
}

export default QScreenLoading;
