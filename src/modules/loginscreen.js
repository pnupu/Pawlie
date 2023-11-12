import React, { useState } from "react";
import axios from "axios";

function QScreen1({ stepBack }) {
  const [number, setNumber] = useState("");

  const handleStartChallengeClick = (event) => {
    event.preventDefault();
    axios.get(`https://server.getpawlie.com/users/phone/${number}`)
    .then(response => {
      console.log('User data:', response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = "/home";
    })
    .catch(error => {
      alert("Phonenumber not found!")
      if (error.response) {
        
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src="/hero-cover-min.jpg"
        className="absolute top-0 w-full h-[300px] md:h-[30vh] object-cover"
      ></img>
      <div className="h-[320px] md:h-[30vh]"></div>
      <h1 className="text-4xl md:text-6xl font-black uppercase text-center mb-6">
        S-paw-t is the new sport
      </h1>
      <p className="text-lg md:text-xl text-dark-secondary text-center mb-8 max-w-xl">
        Your unique companion to achieve your athletic aspirations.
      </p>
      <div className="flex flex-col gap-4 mt-8 w-full max-w-sm mx-auto">
        <div id="inputs" className="flex flex-col gap-2">
          {" "}
          <input
            type="number"
            name="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="block w-full text-md font-medium rounded-full border-[#BCBCBC] border py-3 px-5 text-[#4F4F4F] shadow-sm  placeholder:text-[#BCBCBC] focus:ring-2 focus:ring-outset focus:ring-indigo-600 md:text-lg "
            placeholder="+358 40 1234567"
            aria-describedby="email-description"
            required
          />
        </div>

        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={(event) => handleStartChallengeClick(event)}>
          login
        </button>
        <button className="text-lg font-medium text-center px-8 py-3 mt-4 bg-primary hover:bg-secondary-hover rounded-full text-white transition-all" onClick={() => stepBack()}>
          Back
      </button>
      </div>
    </div>
  );
}

export default QScreen1;
