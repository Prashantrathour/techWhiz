import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

export const Homepage = () => {
  return (
    <div className="bg-blue-900 h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mt-20 text-white text-4xl font-bold">Awesome App for Your Interview Practice.</h1>
        <p className="mt-4 text-white">Prepare for your next interview with confidence using our comprehensive interview preparation app, designed to enhance your skills and boost your chances of success.</p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center">
        <div className="flex items-center justify-center mb-10 sm:w-64 sm:mr-10">
          <img className="w-full" src="https://media.istockphoto.com/id/1077407866/vector/brainstorm-concept-flat-style-design-of-job-interview.jpg?s=612x612&w=0&k=20&c=mpa_sNID3PIbKByiTQTUHx6RS7eptpTyjlEpRPwqKDw=" alt="" />
          <BiRightArrowAlt className="text-white text-3xl mt-4 sm:mt-0" />
        </div>
        <div className="flex items-center justify-center mb-10 sm:w-64 sm:ml-10 sm:mr-10">
          <img className="w-full" src="https://media.istockphoto.com/id/1298405314/vector/job-interview.jpg?s=612x612&w=0&k=20&c=F3P4brlXN7S35fe73OrxrKs0-FMc3VoMSuv6I6VIcGg=" alt="" />
          <BiRightArrowAlt className="text-white text-3xl mt-4 sm:mt-0" />
        </div>
        <div className="flex items-center justify-center sm:w-64 sm:ml-10">
          <img className="w-full" src="https://www.apollotechnical.com/wp-content/uploads/2020/06/Job-interview-questions-to-ask-interviewee--1024x685.png" alt="" />
        </div>
      </div>
    </div>
  );
};
