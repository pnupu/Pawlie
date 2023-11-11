import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [apiResponse, setApiResponse] = useState('');
  const [imageDataUrl, setImageDataUrl] = useState('');

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

export default App;
