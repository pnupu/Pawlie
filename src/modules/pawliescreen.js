import React, {useEffect, useState, useRef} from "react";
import "./video.css";
function PawlieScreen() {
  //Get user from local storage
  const [user, setUser] = useState(null);
  const videoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  useEffect(() => {
    // Load the user from localStorage when the component mounts
    const loadedUser = localStorage.getItem("user");
    if (loadedUser) {
      setUser(JSON.parse(loadedUser));
      console.log("User loaded from localStorage!");
      console.log(JSON.parse(loadedUser));
      setScore(calculateTotalScore(JSON.parse(loadedUser).highScores))
      setStars(calculateStars(JSON.parse(loadedUser).highScores))
    }
  }, []);

  const calculateTotalScore = (highScores) => {
    return Object.values(highScores).reduce((total, score) => total + score, 0);
  };
  const calculateStars = (highScores) => {
    let stars = 0;
    Object.values(highScores).forEach(score => {
      if (score >= 10) {
        // One star for reaching 10 points
        stars += 1;
        // Additional stars for each 10 points over the initial 10
        stars += Math.floor((score - 10) / 10);
      }
    });
    return stars;
  };
  
  const handleMouseDown = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
      setIsZoomed(true);
    }
  };

  const handleMouseUp = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
      setIsZoomed(false);
    }
  };
 let videoUrl = null

const videoClassNames = `max-w-full h-auto transition-transform duration-300 ease-in-out ${isZoomed ? 'scale-125' : ''}`;

    videoUrl = user && user.localimageurl
    ? user.localimageurl.replace('.png', '_animation.mp4')
    : 'default_video_url.mp4'; 
    //force re render
  console.log(videoUrl);
  return (

    <div className="flex-grow flex flex-col overflow-y-auto p-6 md:p-8">
      <h1 className="text-2xl font-bold uppercase mb-8">Your Pawlie</h1>

      <div id="content" className="flex flex-col flex-grow ">
        <div
          id="pawlie-modal"
          className="aspect-square w-full bg-black rounded-xl relative overflow-hidden"
        >
          <div
            id="hovering-modals"
            className="z-10 p-4 absolute h-full w-full flex flex-col justify-between"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src="/badges-pawlie.png"
              className="w-ful object-contain"
            ></img>
            <div id="tap-button-modal" className="w-full flex items-center ">
              <button className="mx-auto text-center flex gap-3 bg-white hover:bg-[#ececec] transition-all rounded-full px-5 py-3 font-medium" 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8 4C18.3766 4 18.7488 4.00078 19.0322 4.02393C19.3038 4.04613 19.4045 4.0838 19.454 4.109C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C19.9162 4.59546 19.9539 4.69618 19.9761 4.96784C19.9992 5.25118 20 5.62345 20 6.2V8C20 8.55229 20.4477 9 21 9C21.5523 9 22 8.55229 22 8V6.16146C22 5.63431 22 5.17955 21.9694 4.80497C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.9836 2.13419 19.5904 2.06287 19.195 2.03057C18.8205 1.99997 18.3657 1.99998 17.8386 2H16C15.4477 2 15 2.44772 15 3C15 3.55229 15.4477 4 16 4L17.8 4Z"
                    fill="#714DFF"
                  />
                  <path
                    d="M6.16146 2H8C8.55229 2 9 2.44772 9 3C9 3.55229 8.55229 4 8 4H6.2C5.62345 4 5.25118 4.00078 4.96784 4.02393C4.69618 4.04613 4.59546 4.0838 4.54601 4.109C4.35785 4.20487 4.20487 4.35785 4.109 4.54601C4.0838 4.59546 4.04613 4.69618 4.02393 4.96784C4.00078 5.25118 4 5.62345 4 6.2V8C4 8.55229 3.55229 9 3 9C2.44772 9 2 8.55229 2 8V6.16146C1.99998 5.63433 1.99997 5.17954 2.03057 4.80497C2.06287 4.40963 2.13419 4.01641 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.01641 2.13419 4.40963 2.06287 4.80497 2.03057C5.17954 1.99997 5.63433 1.99998 6.16146 2Z"
                    fill="#714DFF"
                  />
                  <path
                    d="M3 15C3.55229 15 4 15.4477 4 16V17.8C4 18.3766 4.00078 18.7488 4.02393 19.0322C4.04613 19.3038 4.0838 19.4045 4.109 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.59546 19.9162 4.69618 19.9539 4.96784 19.9761C5.25118 19.9992 5.62345 20 6.2 20H8C8.55229 20 9 20.4477 9 21C9 21.5523 8.55229 22 8 22H6.16146C5.63431 22 5.17955 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8386V16C2 15.4477 2.44772 15 3 15Z"
                    fill="#714DFF"
                  />
                  <path
                    d="M21 15C21.5523 15 22 15.4477 22 16V17.8385C22 18.3657 22 18.8205 21.9694 19.195C21.9371 19.5904 21.8658 19.9836 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C19.9836 21.8658 19.5904 21.9371 19.195 21.9694C18.8205 22 18.3657 22 17.8385 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H17.8C18.3766 20 18.7488 19.9992 19.0322 19.9761C19.3038 19.9539 19.4045 19.9162 19.454 19.891C19.6422 19.7951 19.7951 19.6422 19.891 19.454C19.9162 19.4045 19.9539 19.3038 19.9761 19.0322C19.9992 18.7488 20 18.3766 20 17.8V16C20 15.4477 20.4477 15 21 15Z"
                    fill="#714DFF"
                  />
                  <path
                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    fill="#714DFF"
                  />
                </svg>
                Tap to interact
              </button>
            </div>
          </div>

          <div id="pawlie-modal" className="aspect-square w-full bg-black rounded-xl relative overflow-hidden">
            
          {videoUrl && (
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            key={videoUrl} // Changing the key forces a re-render
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={videoClassNames}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 grid-col-1 mt-6">
          <div
            style={{
              boxShadow: "0px 4px 0px 0px #2198F3", // Added a blur radius of 4px
            }}
            className="p-4 border-2 bg-white border-[#2198F3] rounded-xl flex flex-col justify-start gap-1"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5007 5C12.0404 5 11.6673 5.3731 11.6673 5.83333C11.6673 6.29357 12.0404 6.66667 12.5007 6.66667H16.3221L11.1875 11.8013C11.0128 11.976 10.9167 12.0711 10.8424 12.1342L10.834 12.1413L10.8255 12.1342C10.7512 12.0711 10.6552 11.976 10.4804 11.8013L8.18059 9.50142C8.0319 9.35269 7.88707 9.20783 7.75439 9.0952C7.60869 8.9715 7.42378 8.83853 7.18235 8.76008C6.84761 8.65132 6.48703 8.65132 6.15229 8.76008C5.91086 8.83853 5.72595 8.9715 5.58024 9.0952C5.44757 9.20783 5.30275 9.35268 5.15406 9.50141L1.07806 13.5774C0.752625 13.9028 0.752625 14.4305 1.07806 14.7559C1.4035 15.0814 1.93114 15.0814 2.25657 14.7559L6.31376 10.6987C6.48849 10.524 6.58456 10.4289 6.65887 10.3658L6.66732 10.3587L6.67576 10.3658C6.75007 10.4288 6.84614 10.524 7.02087 10.6987L9.32073 12.9986C9.46942 13.1473 9.61423 13.2922 9.74691 13.4048C9.89262 13.5285 10.0775 13.6615 10.319 13.7399C10.6537 13.8487 11.0143 13.8487 11.349 13.7399C11.5904 13.6615 11.7754 13.5285 11.9211 13.4048C12.0537 13.2922 12.1986 13.1473 12.3473 12.9986L17.5007 7.84518V11.6667C17.5007 12.1269 17.8737 12.5 18.334 12.5C18.7942 12.5 19.1673 12.1269 19.1673 11.6667V5.83333C19.1673 5.3731 18.7942 5 18.334 5H12.5007Z"
                fill="#2198F3"
              />
            </svg>

            <p className=" uppercase font-bold text-[#2198F3]">
              Completed Goals
            </p>
            <p className="font-bold text-4xl">12</p>
          </div>
          <div
            style={{
              boxShadow: "0px 4px 0px 0px #E6B600", // Added a blur radius of 4px
            }}
            className="p-4 border-2 bg-white border-[#E6B600] rounded-xl flex flex-col justify-start gap-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.1601 1.01292C19.4774 1.06441 19.7506 1.26529 19.8944 1.5528L20.7453 3.25466L22.4472 4.10558C22.7347 4.24934 22.9355 4.52254 22.987 4.83983C23.0385 5.15712 22.9343 5.47982 22.707 5.70712L19.707 8.70712C19.5195 8.89466 19.2652 9.00001 18.9999 9.00001H16.4142L12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929L14.9999 7.58585V5.00001C14.9999 4.7348 15.1053 4.48044 15.2928 4.29291L18.2928 1.29291C18.5201 1.06561 18.8428 0.961435 19.1601 1.01292Z"
                fill="#E6B600"
              />
              <path
                d="M3 12C3 7.02944 7.02944 3 12 3C12.5523 3 13 2.55228 13 2C13 1.44772 12.5523 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                fill="#E6B600"
              />
              <path
                d="M8 12C8 9.79086 9.79086 8 12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
                fill="#E6B600"
              />
            </svg>

            <p className="uppercase font-bold text-[#E6B600]">Points Scored</p>
            <p className="font-bold text-4xl">{score}</p>
          </div>
          <div
            style={{
              boxShadow: "0px 4px 0px 0px #FF5E3A", // Added a blur radius of 4px
            }}
            className="p-4 border-2 bg-white border-[#FF5E3A] rounded-xl flex flex-col justify-start gap-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9333 1.64102C15.7848 1.25483 15.4138 1 15 1C14.5862 1 14.2152 1.25483 14.0667 1.64102L12.888 4.70544C12.5876 5.48648 12.4932 5.71155 12.3641 5.89315C12.2345 6.07535 12.0754 6.23455 11.8931 6.36411C11.7116 6.49323 11.4865 6.58763 10.7054 6.88803L7.64102 8.06665C7.25483 8.21519 7 8.58623 7 9C7 9.41377 7.25483 9.78481 7.64102 9.93335L10.7054 11.112C11.4865 11.4124 11.7116 11.5068 11.8931 11.6359C12.0754 11.7655 12.2345 11.9246 12.3641 12.1069C12.4932 12.2884 12.5876 12.5135 12.888 13.2946L14.0667 16.359C14.2152 16.7452 14.5862 17 15 17C15.4138 17 15.7848 16.7452 15.9333 16.359L17.112 13.2946C17.4124 12.5135 17.5068 12.2884 17.6359 12.1069C17.7655 11.9246 17.9246 11.7655 18.1069 11.6359C18.2884 11.5068 18.5135 11.4124 19.2946 11.112L22.359 9.93335C22.7452 9.78481 23 9.41377 23 9C23 8.58623 22.7452 8.21519 22.359 8.06665L19.2946 6.88803C18.5135 6.58763 18.2884 6.49323 18.1069 6.36411C17.9246 6.23455 17.7654 6.07536 17.6359 5.89315C17.5068 5.71155 17.4124 5.48648 17.112 4.70544L15.9333 1.64102Z"
                fill="#FF5E3A"
              />
              <path
                d="M7.39443 12.5528C7.22503 12.214 6.87877 12 6.5 12C6.12123 12 5.77496 12.214 5.60557 12.5528L4.82111 14.1217C4.53863 14.6867 4.45255 14.8493 4.34796 14.9849C4.24305 15.121 4.12104 15.243 3.98494 15.348C3.84925 15.4525 3.68667 15.5386 3.1217 15.8211L1.55279 16.6056C1.214 16.775 1 17.1212 1 17.5C1 17.8788 1.214 18.225 1.55279 18.3944L3.1217 19.1789C3.68667 19.4614 3.84925 19.5475 3.98494 19.652C4.12104 19.757 4.24305 19.879 4.34796 20.0151C4.45255 20.1507 4.53863 20.3133 4.82111 20.8783L5.60557 22.4472C5.77497 22.786 6.12123 23 6.5 23C6.87877 23 7.22504 22.786 7.39443 22.4472L8.17889 20.8783C8.46137 20.3133 8.54745 20.1507 8.65204 20.0151C8.75695 19.879 8.87896 19.757 9.01506 19.652C9.15075 19.5475 9.31333 19.4614 9.8783 19.1789L11.4472 18.3944C11.786 18.225 12 17.8788 12 17.5C12 17.1212 11.786 16.775 11.4472 16.6056L9.8783 15.8211C9.31333 15.5386 9.15075 15.4525 9.01506 15.348C8.87896 15.243 8.75695 15.121 8.65204 14.9849C8.54745 14.8493 8.46137 14.6867 8.17889 14.1217L7.39443 12.5528Z"
                fill="#FF5E3A"
              />
            </svg>

            <p className=" uppercase font-bold text-[#FF5E3A]">
              Stars Collected
            </p>
            <p className="font-bold text-4xl">{stars}</p>
          </div>
          <div
            style={{
              boxShadow: "0px 4px 0px 0px #950DFF", // Added a blur radius of 4px
            }}
            className="p-4 border-2 bg-white border-[#950DFF] rounded-xl flex flex-col justify-start gap-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2C9 1.44772 8.55229 1 8 1C7.44772 1 7 1.44772 7 2V3.00163C6.52454 3.00489 6.10898 3.01472 5.74818 3.04419C5.18608 3.09012 4.66938 3.18868 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43598 5.18404C2.18868 5.66937 2.09012 6.18608 2.0442 6.74817C1.99998 7.28936 1.99999 7.95373 2 8.75869V17.2413C1.99999 18.0463 1.99998 18.7106 2.0442 19.2518C2.09012 19.8139 2.18868 20.3306 2.43598 20.816C2.81947 21.5686 3.43139 22.1805 4.18404 22.564C4.66938 22.8113 5.18608 22.9099 5.74818 22.9558C6.28937 23 6.95372 23 7.75868 23H16.2413C17.0463 23 17.7106 23 18.2518 22.9558C18.8139 22.9099 19.3306 22.8113 19.816 22.564C20.5686 22.1805 21.1805 21.5686 21.564 20.816C21.8113 20.3306 21.9099 19.8139 21.9558 19.2518C22 18.7106 22 18.0463 22 17.2413V8.75868C22 7.95372 22 7.28936 21.9558 6.74817C21.9099 6.18608 21.8113 5.66937 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C19.3306 3.18868 18.8139 3.09012 18.2518 3.04419C17.891 3.01472 17.4755 3.00489 17 3.00163V2ZM7 6V5.00176C6.55447 5.00489 6.20463 5.01357 5.91104 5.03755C5.47262 5.07337 5.24842 5.1383 5.09202 5.21799C4.7157 5.40973 4.40974 5.7157 4.21799 6.09202C4.1383 6.24842 4.07337 6.47262 4.03755 6.91104C4.00078 7.36113 4 7.94342 4 8.8V9H20V8.8C20 7.94342 19.9992 7.36113 19.9624 6.91104C19.9266 6.47262 19.8617 6.24842 19.782 6.09202C19.5903 5.7157 19.2843 5.40973 18.908 5.21799C18.7516 5.1383 18.5274 5.07337 18.089 5.03755C17.7954 5.01357 17.4455 5.00489 17 5.00176V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6ZM8.86188 13.0094C9.8639 12.1771 11.1975 12.4216 11.9973 13.3306C12.797 12.4216 14.1134 12.1858 15.1326 13.0094C16.1519 13.8331 16.2757 15.2335 15.4888 16.2179C15.0209 16.8033 13.8748 17.8531 13.0226 18.6079C12.6708 18.9195 12.4949 19.0753 12.2832 19.1385C12.102 19.1926 11.8925 19.1926 11.7114 19.1385C11.4996 19.0753 11.3237 18.9195 10.9719 18.6079C10.1197 17.8531 8.97361 16.8033 8.50568 16.2179C7.71879 15.2335 7.85986 13.8418 8.86188 13.0094Z"
                fill="#950DFF"
              />
            </svg>

            <p className=" uppercase font-bold text-[#950DFF]">Days Streak</p>
            <p className="font-bold text-4xl">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PawlieScreen;
