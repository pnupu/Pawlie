import React, { useRef, useState, useEffect } from 'react';
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

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState('');

  const capture = React.useCallback(() => {
    const video = webcamRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    setImageDataUrl(imageDataUrl);
    return imageDataUrl;
  }, [webcamRef]);

  const uploadImageToServer = async () => {
    setUploading(true);
    try {
      const imageDataUrl = capture();
      // Convert Base64 image to blob if necessary
      const response = await axios.post('/upload-image', { image: imageDataUrl });
      // Handle response and get URL of uploaded image
      // ...
      setUploading(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
    }
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        webcamRef.current.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing webcam:', error);
      });
  }, []);

  return (
    <div>
      <video ref={webcamRef} autoPlay playsInline muted></video>
      <button onClick={uploadImageToServer} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Capture & Upload'}
      </button>
      {imageDataUrl && <img src={imageDataUrl} alt="Captured" />}
    </div>
  );
};


function GetApiData() {
  const [apiResponse, setApiResponse] = useState('');
  const [imageDataUrl, setImageDataUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploadgin] = useState(false);

  const uploadImageToServer = () => {
    setUploadgin(true);
    //Get the image using webcam

    //send the image to the server using axios
    //Get the url for the image and store it to imageDataUrl

  }


  const handleFileSelect = () => {
    // Set the predetermined image URL
    const imageUrl = 'https://vaalitulospalvelu-frontend-prod.mtvuutiset.fi/images/405_0131.png';
    setImageDataUrl(imageUrl);
  };

  const sendImageToOpenAI = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4-vision-preview",
        messages: [
          {
            "role": "user",
            "content": [
              {"type": "text", "text": "Answer the next questions: Does the person have glasses, is the skintone light, medium or dark, is the person male or female. Answer to all the questions with one word"},
              {"type": "image_url", "image_url": imageDataUrl} // Sending the predetermined image URL
            ]
          }
        ],
        max_tokens: 300
      }, {
        headers: {
          'Authorization': `Bearer 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`, // Replace with your API key
          'Content-Type': 'application/json'
        }
      });

      setApiResponse(JSON.stringify(response.data.choices[0], null, 2));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <button onClick={handleFileSelect} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Choose File
      </button>
      {imageDataUrl && <img src={imageDataUrl} alt="Uploaded" style={{ maxWidth: '500px', marginTop: '20px' }} />}
      {imageDataUrl && <button onClick={sendImageToOpenAI} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
        Send to OpenAI
      </button>}

      <div className="response mt-4 p-4 bg-white rounded shadow">
        <pre>{apiResponse}</pre>
      </div>
    </div>
  );
}



const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
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
        return <QScreen4 nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <QScreenLoading nextStep={nextStep}/>;
      case 6:
        return <QScreen5 nextStep={nextStep} prevStep={prevStep} />;
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
    </div>
  );
};

export default Quiz;