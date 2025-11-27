import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      <p className="text-center text-5xl font-bold">Welcome to Prompt2Type!</p>
      <section className=" ">
        <p className="itmes-left mt-20 mr-20 text-3xl font-bold text-blue-900">
          Introduction:
        </p>
        <p className="mt-4 w-150 rounded-lg border-2 bg-gray-300 p-2 text-2xl text-wrap">
          This site lets the user type about anything they want. All you have to
          do is give a short prompt and then wait a few seconds and a paragraph
          tailored to your prompt will appear. You can type about whatever comes
          to mind or get random generated text by leaving the prompt blank.
        </p>
      </section>
      <button
        onClick={() => navigate('/prompt')}
        className="mt-16 w-30 rounded-lg border-2 border-gray-800 bg-blue-500 p-0.5 text-xl font-bold text-white hover:bg-blue-400"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
