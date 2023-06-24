import React, { useState } from 'react';
import axios from 'axios';

const SoftSkills = () => {

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');


  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, isUserMessage: true },
    ]);

    setInputText('');

    try {
      // Send user message to the backend
      const response = await axios.post('http://localhost:8080/', { prompt: inputText });

      // Add bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.bot, isUserMessage: false },
      ]);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 mt-24">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4 text-red-400">
            <h1>Ask Your Interviews Questions</h1>
            <div className="mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 ${
                    message.isUserMessage ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  } rounded-lg`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={inputText}
                onChange={handleInputTextChange}
                placeholder="Type your message..."
                className="w-full border rounded-lg px-3 py-2 outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-4"
              >
                Send
              </button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 520" style={{ position: "absolute", top: 80, left: 0, zIndex: -1, height:"" }}>
            <path fill="#a2d9ff" fill-opacity="1" d="M0,192L40,192C80,192,160,192,240,181.3C320,171,400,149,480,128C560,107,640,85,720,69.3C800,53,880,43,960,74.7C1040,107,1120,181,1200,192C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
