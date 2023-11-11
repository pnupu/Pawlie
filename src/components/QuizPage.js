import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './quiz.css';
import QScreen1 from "../modules/qscreen1";
import QScreen2 from "../modules/qscreen2";
import QScreen3 from "../modules/qscreen3";
import QScreen4 from "../modules/qscreen4";
import QScreen5 from "../modules/qscreen5";
import QScreen6 from "../modules/qscreen6";
import QScreen7 from "../modules/qscreen7";
import QScreen8 from "../modules/qscreen8";
import QScreenLoading from "../modules/qscreenloading";
import QScreenChallenge from "../modules/qscreenchallenge";
import 'tailwindcss/tailwind.css';


const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const [localimageurl, setLocalImageUrl] = useState("rabbits/rabbit_no_female_medium.png");
  const ImageUploader = () => {
    const [uploading, setUploading] = useState(false);
    const [imageDataUrl, setImageDataUrl] = useState('');
  
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        // Check the file size
        if (file.size > MAX_SIZE) {
          alert('File is too large. The maximum file size is 5MB.');
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageDataUrl(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const uploadImageToServer = async () => {
      if (!imageDataUrl) {
        alert('Please select an image first.');
        return;
      }
    
      setUploading(true);
      try {
        // Convert imageDataUrl to a form data
        const formData = new FormData();
        // Fetch the image content from the imageDataUrl
        const blob = await fetch(imageDataUrl).then((res) => res.blob());
        formData.append('image', blob);
    
        // ImgBB endpoint with API key
        const IMG_BB_ENDPOINT = `https://api.imgbb.com/1/upload?expiration=600&key=a0bab411455ea79b8b69892f0d652a02`;
    
        // Axios post request to ImgBB
        const response = await axios.post(IMG_BB_ENDPOINT, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        // Assuming the API returns the URL of the uploaded image
        if (response.data.status === 200 && response.data.data.url) {
          console.log('Image uploaded successfully:', response.data.data.url);
          localStorage.setItem('imageUrl', JSON.stringify(response.data.data.url));
          setImageDataUrl(response.data.data.url)
          GetApiData(response.data.data.url)
          toggleModal();
        }
    
        setUploading(false);
      } catch (error) {
        console.error('Error uploading image:', error);
        setUploading(false);
      }
    };
    
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={uploadImageToServer} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
        {imageDataUrl && <img src={imageDataUrl} alt="Preview" />}
        {imageDataUrl && (
        <button
          onClick={uploadImageToServer}
          disabled={uploading}
          className={`${
            uploading
              ? 'bg-blue-400 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          } transition ease-in-out duration-150`}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      )}
      </div>
    );
  };
  
  const parseApiDataToImage = (apiData) => {

    const parts = apiData.replace(/\.$/, "").split(', ');
    let imageurl = ""
    const glassesOrNo = parts[0] || "no"
    const skintone = parts[1] || "light"
    const gender = parts[2] || "male"
    if(gender === "female"){
      var randomNumber = Math.random();

      var choice = randomNumber < 0.5 ? "cat" : "rabbit";
      if(glassesOrNo === "yes") choice = "cat"
      if(choice === "cat"){
        imageurl = "cats/cat_"+ glassesOrNo + "_female_" + skintone + ".png"
      } else {
        imageurl = "rabbits/rabbit_no_female_" + skintone + ".png"
      }
    } else {
      var randomNumber = Math.random();
      var choice = randomNumber < 0.5 ? "dog" : "rabbit";
      if(glassesOrNo === "yes") choice = "dog"
      if(choice === "dog"){
        imageurl = "dogs/dog_" + glassesOrNo + "_male_" + skintone + ".png"
      } else {
        imageurl = "rabbits/rabbit_no_male_" + skintone + ".png"
      }
    }
    console.log(imageurl)
    if(imageurl === ""){
      imageurl = "rabbits/rabbit_no_female_medium.png"
    }
    //Store imageurl in local storage
    localStorage.setItem('localimageurl', JSON.stringify(imageurl));
    console.log(imageurl)
    nextStep();
    return imageurl
  }
  function GetApiData(url) {
    
    console.log(process.env)
    nextStep();
    const sendImageToOpenAI = async () => {
      try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: "gpt-4-vision-preview",
          messages: [
            {
              "role": "user",
              "content": [
                {"type": "text", "text": "Answer the next questions: Does the person have glasses, is the skintone light, medium or dark, is the person male or female. Answer to all the questions with one word"},
                {"type": "image_url", "image_url": url} // Sending the predetermined image URL
              ]
            }
          ],
          max_tokens: 300
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.CHATGPT_API_KEY}`, // Replace with your API key
            'Content-Type': 'application/json'
          }
        });
  
        setApiResponse(JSON.stringify(response.data.choices[0], null, 2));
        console.log(response.data.choices[0].message.content)
        localStorage.setItem('chatgpt', JSON.stringify(response.data.choices[0].message.content));
        setLocalImageUrl(parseApiDataToImage(response.data.choices[0].message.content));
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
        parseApiDataToImage("");
      }
    };
    sendImageToOpenAI();
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const nextStep = (skip) => {
    if(currentStep === 4 && skip === true){
      setTimeout(() => {
        nextStep();
      }, 3000);
    }
    setCurrentStep((prevStep) => (prevStep < 10 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  }

  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return <QScreen1 nextStep={nextStep} />;
      case 2:
        return <QScreen2 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <QScreen3 nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <QScreen4 toggleModal={toggleModal} nextStep={nextStep}/>;
      case 5:
        return <QScreenLoading nextStep={nextStep}/>;
      case 6:
        return <QScreen5 nextStep={nextStep} prevStep={prevStep} localimageurl={localimageurl}/>;
      case 7:
        return <QScreen6 nextStep={nextStep} prevStep={prevStep} />;
      case 8:
        return <QScreen7 nextStep={nextStep} prevStep={prevStep} />;
      case 9:
        return <QScreen8 nextStep={nextStep} prevStep={prevStep} />;
      case 10:
          return <QScreenChallenge nextStep={nextStep} />;
      default:
        return <QScreen1 nextStep={nextStep} prevStep={prevStep} />;
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #2F80ED, #56CCF2)",
      }}
      className="min-h-screen p-3 md:p-4 flex flex-col justify-center"
    >

        <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden bg-white rounded-2xl p-4 md:p-16">
          {renderScreen()}
        </div>
      </div>
      
    {/* Overlay for the modal */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
        
        {/* Modal content */}
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          
          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={toggleModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" aria-label="close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Modal body */}
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Upload Image</h3>
            
            {/* Insert the ImageUploader component */}
            <ImageUploader closeModal={toggleModal} />
          </div>
        </div>
      </div>
    )}

    </div>
    
  );
};

export default Quiz;