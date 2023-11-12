import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function QScreenResults({localimageurl, nextStep}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate(); // This hook allows you to navigate programmatically

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted!");

    const score = localStorage.getItem('jumpScore');

    const formData = {
      username: name,
      phoneNumber: number,
      localimageurl: localimageurl,
      highScores: {
        "game1": Number(score),
        "game2": 0,
        "game3": 0,
      },
    };
  
    try {
      const response = await fetch('https://server.getpawlie.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // The response is the new user object with a generated id
        const newUser = await response.json();
        console.log("New user created:", newUser);
        //Store user in local storage
        localStorage.setItem('user', JSON.stringify(newUser));
        navigate("/");
        // Here you might want to do something upon successful user creation
      } else {
        // If the server response is not ok, handle errors
        console.error("Server responded with an error:", response.status);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
  }
  
  
  return (
    <div className="flex flex-col items-center">
      <div id="pawlie" className="relative p-6 max-w-full mx-auto">
        <img
          src="/results-tags.png"
          className="absolute object-contain w-full h-full ml-[-24px] mt-[-24px] "
        ></img>
        <img
          className="aspect-square object-cover max-w-sm w-full "
          src={localimageurl}
        ></img>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-2 max-w-2xl mx-auto">
          Save results and see full app!
        </h2>
        <div className="grid gap-6 md:grid-cols-3 my-8">
          <div
            style={{
              boxShadow: "0px 4px 0px 0px #4D8EFF", // Added a blur radius of 4px
            }}
            className="p-4 border bg-white border-[#4D8EFF] rounded-xl flex flex-col justify-start gap-1"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0007 5.25C12.5404 5.25 12.1673 5.6231 12.1673 6.08333C12.1673 6.54357 12.5404 6.91667 13.0007 6.91667H16.8221L11.6875 12.0513C11.5128 12.226 11.4167 12.3211 11.3424 12.3842L11.334 12.3913L11.3255 12.3842C11.2512 12.3211 11.1552 12.226 10.9804 12.0513L8.68059 9.75142C8.5319 9.60269 8.38707 9.45783 8.25439 9.3452C8.10869 9.2215 7.92378 9.08853 7.68235 9.01008C7.34761 8.90132 6.98703 8.90132 6.65229 9.01008C6.41086 9.08853 6.22595 9.2215 6.08024 9.3452C5.94757 9.45783 5.80275 9.60268 5.65406 9.75141L1.57806 13.8274C1.25263 14.1528 1.25263 14.6805 1.57806 15.0059C1.9035 15.3314 2.43114 15.3314 2.75657 15.0059L6.81376 10.9487C6.98849 10.774 7.08456 10.6789 7.15887 10.6158L7.16732 10.6087L7.17576 10.6158C7.25007 10.6788 7.34614 10.774 7.52087 10.9487L9.82073 13.2486C9.96942 13.3973 10.1142 13.5422 10.2469 13.6548C10.3926 13.7785 10.5775 13.9115 10.819 13.9899C11.1537 14.0987 11.5143 14.0987 11.849 13.9899C12.0904 13.9115 12.2754 13.7785 12.4211 13.6548C12.5537 13.5422 12.6986 13.3973 12.8473 13.2486L18.0007 8.09518V11.9167C18.0007 12.3769 18.3737 12.75 18.834 12.75C19.2942 12.75 19.6673 12.3769 19.6673 11.9167V6.08333C19.6673 5.6231 19.2942 5.25 18.834 5.25H13.0007Z"
                fill="#2198F3"
              />
            </svg>
            <p className=" uppercase font-bold text-[#2198F3]">
              Autodetect
            </p>
            <p className="font-medium">
              See your Pawlie develop based on your lifestyle.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0px 4px 0px 0px #FF5E3A", // Added a blur radius of 4px
            }}
            className="p-4 border bg-white border-[#FF5E3A] rounded-xl flex flex-col justify-start gap-1"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.58398 14.8334C2.58398 14.3731 2.95708 14 3.41732 14H8.00065C8.46089 14 8.83398 14.3731 8.83398 14.8334C8.83398 15.2936 8.46089 15.6667 8.00065 15.6667H3.41732C2.95708 15.6667 2.58398 15.2936 2.58398 14.8334Z"
                fill="#FF5345"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.33398 10.25C1.33398 9.78979 1.70708 9.4167 2.16732 9.4167H5.91732C6.37756 9.4167 6.75065 9.78979 6.75065 10.25C6.75065 10.7103 6.37756 11.0834 5.91732 11.0834H2.16732C1.70708 11.0834 1.33398 10.7103 1.33398 10.25Z"
                fill="#FF5345"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00065 5.6667C3.00065 5.20646 3.37375 4.83336 3.83398 4.83336H8.00065C8.46089 4.83336 8.83398 5.20646 8.83398 5.6667C8.83398 6.12693 8.46089 6.50003 8.00065 6.50003H3.83398C3.37375 6.50003 3.00065 6.12693 3.00065 5.6667Z"
                fill="#FF5345"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9736 1.97503C15.3296 2.11572 15.5439 2.48078 15.4933 2.86017L14.7858 8.1667H17.9552C17.9648 8.1667 17.9743 8.16669 17.9839 8.16669C18.1679 8.16665 18.3585 8.16661 18.516 8.18101C18.671 8.19517 18.9528 8.23271 19.2047 8.42715C19.4985 8.65391 19.6764 8.9995 19.6901 9.37038C19.7019 9.6884 19.5687 9.93956 19.4901 10.0739C19.4103 10.2104 19.2995 10.3655 19.1925 10.5152C19.1869 10.523 19.1814 10.5308 19.1758 10.5386L13.6788 18.2344C13.4563 18.5458 13.0503 18.6657 12.6943 18.525C12.3384 18.3843 12.124 18.0193 12.1746 17.6399L12.8822 12.3334H9.71278C9.70322 12.3334 9.69363 12.3334 9.68403 12.3334C9.50008 12.3334 9.30942 12.3334 9.15193 12.3191C8.99701 12.3049 8.71517 12.2674 8.46324 12.0729C8.16944 11.8461 7.99159 11.5006 7.97784 11.1297C7.96605 10.8117 8.09932 10.5605 8.17784 10.4262C8.25766 10.2897 8.36851 10.1346 8.47546 9.9849C8.48105 9.97709 8.48662 9.96929 8.49218 9.96151L13.9892 2.26566C14.2117 1.95422 14.6177 1.83435 14.9736 1.97503Z"
                fill="#FF5345"
              />
            </svg>

            <p className=" uppercase font-bold text-[#FF5E3A]">Maintain streaks</p>
            <p className="font-medium">
              Consistant good behaviour is rewarded with streaks.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0px 4px 0px 0px #E6B600", // Added a blur radius of 4px
            }}
            className="p-4 border bg-white border-[#E6B600] rounded-xl flex flex-col justify-start gap-1"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 8.58331C3 4.44118 6.35786 1.08331 10.5 1.08331C14.6421 1.08331 18 4.44118 18 8.58331C18 10.6885 17.0443 12.5335 15.7436 14.2225C14.6566 15.6339 13.2653 17.0131 11.8755 18.3908L11.8746 18.3918C11.6121 18.652 11.3496 18.9122 11.0893 19.1726C10.7638 19.498 10.2362 19.498 9.91074 19.1726C9.65022 18.912 9.387 18.6511 9.1243 18.3907C7.73455 17.013 6.34337 15.6339 5.25643 14.2225C3.95569 12.5335 3 10.6885 3 8.58331ZM13 8.58331C13 9.96403 11.8807 11.0833 10.5 11.0833C9.11929 11.0833 8 9.96403 8 8.58331C8 7.2026 9.11929 6.08331 10.5 6.08331C11.8807 6.08331 13 7.2026 13 8.58331Z"
                fill="#E6B600"
              />
            </svg>

            <p className=" uppercase font-bold text-[#E6B600]">Belong</p>
            <p className="font-medium">
              Show up and share your collection of rare items with friends.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8 w-full max-w-sm mx-auto">
        <div id="inputs" className="flex flex-col gap-2">
          {" "}
          <input
            type="name"
            name="name"
            id="name"
            className="block w-full text-md font-medium rounded-full border-[#BCBCBC] border py-3 px-5 text-[#4F4F4F] shadow-sm  placeholder:text-[#BCBCBC] focus:ring-2 focus:ring-outset focus:ring-indigo-600 md:text-lg "
            placeholder="Name"
            aria-describedby="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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

        <button className="text-lg font-medium text-center px-8 py-3 bg-primary hover:bg-primary-hover rounded-full text-white transition-all" onClick={(event) => handleSubmit(event)}>
          Signup
        </button>
        <p className="text-xs text-center">
          Project is in early development of Junction 2023 Hackathon. Product
          communication during an event is expected{" "}
        </p>
      </div>
    </div>
  );
}

export default QScreenResults;
