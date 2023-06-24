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
          <div className="p-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
