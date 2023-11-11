import React, { useState, useRef } from 'react';

const PetPage = () => {
  const videoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseDown = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3; // Speed up the video
      setIsZoomed(true); // Set the zoom state to true
    }
  };

  const handleMouseUp = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Reset video speed
      setIsZoomed(false); // Set the zoom state to false
    }
  };

  // Apply the scale class conditionally based on the isZoomed state
  const videoClassNames = `max-w-full h-auto transition-transform duration-300 ease-in-out ${isZoomed ? 'scale-125' : ''}`;

  return (
    <div className="flex justify-center items-center h-screen">
      <video 
        ref={videoRef}
        loop 
        autoPlay 
        muted 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Reset when the cursor leaves the video area
        className={videoClassNames} // Apply conditional classes
      >
        <source src="assets/Rabbit_Basketball_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default PetPage;
