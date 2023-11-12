import React, { useState } from 'react';
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
import QScreen9 from "../modules/qscreen9";
import QScreenLoading from "../modules/qscreenloading";
import QScreenChallenge from "../modules/qscreenchallenge";
import QScreenResults from "../modules/qscreenresults";
import LoginScreen from "../modules/loginscreen";

import 'tailwindcss/tailwind.css';


const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <input 
          className="file:mr-4 file:py-2 file:px-4 
                     file:rounded-full file:border-0 
                     file:text-sm file:font-semibold 
                     file:bg-violet-50 file:text-violet-700 
                     hover:file:bg-violet-100"
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        {imageDataUrl && (
          <img 
            className="max-w-xs rounded shadow-lg" 
            src={imageDataUrl} 
            alt="Preview" 
          />
        )}
        {imageDataUrl && (
          <button
            onClick={uploadImageToServer}
            disabled={uploading}
            className={`text-white font-bold py-2 px-4 rounded transition ease-in-out duration-150 
                        ${uploading ? 'bg-blue-400 opacity-50 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        )}
      </div>
    );
    
  };
  
  const parseApiDataToImage = (apiData, delay) => {
    let parts = apiData.toLowerCase().replace(/\.$/, "").split(', ');
    if(apiData.lenght > 30) {
      parts = [null, null, null]
    }
    let imageurl = ""
    const glassesOrNo = parts[0]
    const skintone = parts[1]
    const gender = parts[2]
    if(gender && skintone && glassesOrNo){
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
  }
    console.log(imageurl)
    if(imageurl === ""){
      //Generate random
      // Dog, cat or rabbit
      randomNumber = Math.random();
      var glasses = "no"
      choice = ""
      var skin = ""
      var gen = ""
      if(randomNumber < 0.33) choice = "dog";
      else if(randomNumber < 0.66) choice = "cat";
      else choice = "rabbit";
      var random = Math.random();
      if(random < 0.33) skin = "light"
      else if(random < 0.66) skin = "medium"
      else skin = "dark"

      if(choice !== "rabbit") {
        randomNumber = Math.random();
        if(randomNumber < 0.5) glasses = "yes"
        if(choice === "dog") {
        imageurl = choice + "s/" + choice + "_" + glasses + "_male_" + skin + ".png";
        } else {
          imageurl = choice + "s/" + choice + "_" + glasses + "_female_" + skin + ".png";
        }
      } else {
        var gendermath = Math.random();
        if(gendermath < 0.5) gen = "male"
        else gen = "female"
        imageurl = "rabbits/rabbit_no_" + gen + "_" + skin + ".png"
      }
    }
    //Store imageurl in local storage
    localStorage.setItem('localimageurl', JSON.stringify(imageurl));
    setLocalImageUrl(imageurl)
    console.log(imageurl)
    setTimeout(()=> {
      nextStep();
    }, delay || 0)
    return imageurl
  }
  function GetApiData(url) {
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
            'Authorization': `Bearer ${process.env.REACT_APP_CHATGPT_API_KEY}`, // Replace with your API key
            'Content-Type': 'application/json'
          }
        });
  
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
      parseApiDataToImage("", 2000);

    }
    setCurrentStep((prevStep) => (prevStep < 12 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  }

  const toLogin = () => {
    console.log("to login")
    setCurrentStep(13)
  }

  const stepBack = () => {
    setCurrentStep(1)
  }
  const renderScreen = () => {
  return (
    <>
      <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
        <QScreen1 nextStep={nextStep} toLogin={toLogin}/>
      </div>
      <div style={{ display: currentStep === 2 ? 'block' : 'none' }}>
        <QScreen2 nextStep={nextStep} prevStep={prevStep} />
      </div>
      <div style={{ display: currentStep === 3 ? 'block' : 'none' }}>
        <QScreen3 nextStep={nextStep} prevStep={prevStep} />
      </div>
      <div style={{ display: currentStep === 4 ? 'block' : 'none' }}>
        <QScreen4 toggleModal={toggleModal} nextStep={nextStep} />
      </div>
      <div style={{ display: currentStep === 5 ? 'block' : 'none' }}>
        <QScreenLoading nextStep={nextStep} />
      </div>
      <div style={{ display: currentStep === 6 ? 'block' : 'none' }}>
        <QScreen5 nextStep={nextStep} prevStep={prevStep} localimageurl={localimageurl} />
      </div>
      <div style={{ display: currentStep === 7 ? 'block' : 'none' }}>
        <QScreen6 nextStep={nextStep} prevStep={prevStep} />
      </div>
      <div style={{ display: currentStep === 8 ? 'block' : 'none' }}>
        <QScreen7 nextStep={nextStep} prevStep={prevStep} />
      </div>
      <div style={{ display: currentStep === 9 ? 'block' : 'none' }}>
        <QScreen8 nextStep={nextStep} prevStep={prevStep} />
      </div>
      <div style={{ display: currentStep === 10 ? 'block' : 'none' }}>
        <QScreen9 nextStep={nextStep} prevStep={prevStep} />
      </div>
      <div style={{ display: currentStep === 11 ? 'block' : 'none' }}>
        <QScreenChallenge nextStep={nextStep} />
      </div>
      <div style={{ display: currentStep === 12 ? 'block' : 'none' }}>
        <QScreenResults nextStep={nextStep} localimageurl={localimageurl} />
      </div>
      <div style={{ display: currentStep === 13 ? 'block' : 'none' }}>
        <LoginScreen stepBack={stepBack} />
      </div>
    </>
  );
};


  return (
    <div
      style={{
        background: "linear-gradient(45deg, #2F80ED, #56CCF2)",
      }}
      className="min-h-screen p-3 md:p-4 flex flex-col justify-center"
    >

        <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden bg-white rounded-2xl px-4 py-8 md:p-16">
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