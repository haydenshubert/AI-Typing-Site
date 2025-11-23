import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const { state } = useLocation();
  const { errorsTyped, wordsTyped, toType } = state || {};
  const accuracy = (((wordsTyped - errorsTyped) / wordsTyped) * 100).toFixed(2);
  const navigate = useNavigate();

  const printResults = () => {
    console.log('Errors: ' + errorsTyped);
    console.log('Words typed: ' + wordsTyped);
    console.log('Text: ' + toType);
  };

  // Words of encouragement
  let wpmMessage;
  if (wordsTyped <= 20) {
    wpmMessage = "You're slow :(";
  } else if (wordsTyped <= 30) {
    wpmMessage = 'That was just a warmup';
  } else if (wordsTyped <= 40) {
    wpmMessage = 'Starting to speed up I see!';
  } else if (wordsTyped <= 50) {
    wpmMessage = 'Still some room for improvement!';
  } else if (wordsTyped <= 60) {
    wpmMessage = "You're getting pretty fast!";
  } else if (wordsTyped <= 70) {
    wpmMessage = "You're fingers are on fire!";
  } else if (wordsTyped <= 80) {
    wpmMessage = 'You would beat me anyday!';
  } else if (wordsTyped > 80) {
    wpmMessage = 'Faster than the Flash!';
  } else {
    wpmMessage = 'N/A';
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200 p-16">
      <p className="text-8xl font-bold">Results</p>
      <div className="mt-16 rounded-lg border-4 border-gray-400 bg-white p-6 text-4xl font-bold">
        {accuracy > 75 ? (
          <>
            <p className="border-b-2 p-2">WPM: {wordsTyped}</p>
          </>
        ) : (
          <p className="border-b-2 p-2">
            No WPM: <br /> Accuracy below 75%
          </p>
        )}
        <p className="border-b-2 p-2">Errors: {errorsTyped}</p>
        <p className="border-b-2 p-2">Accuracy: {accuracy}%</p>
        <p>{printResults()}</p>
      </div>
      <div className="mt-4 flex flex-col items-center text-2xl font-bold">
        {accuracy > 75 ? (
          <>
            <p>{wpmMessage}</p>
          </>
        ) : (
          <p>Gotta work on accuracy!</p>
        )}
      </div>
      <div className="mt-30 flex flex-row items-center">
        <button
          onClick={() => navigate('/prompt')}
          className="mr-6 h-12 w-40 rounded-lg border-2 border-gray-800 bg-blue-500 p-0.5 text-2xl font-bold text-white hover:bg-blue-400"
        >
          New Prompt
        </button>
        <button
          onClick={() => navigate('/test', { state: { toType: toType } })}
          className="ml-6 h-12 w-40 rounded-lg border-2 border-gray-800 bg-blue-500 p-0.5 text-2xl font-bold text-white hover:bg-blue-400"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Results;
