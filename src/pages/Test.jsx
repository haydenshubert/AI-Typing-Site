import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toType = location.state?.toType || 'ERROR: No generated text';
  const words = toType.split(' ');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorsTyped, setErrorsTyped] = useState(0);
  const [wordStatus, setWordStatus] = useState([]);
  const [wordsTyped, setWordsTyped] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => {
          // Change value for time (60 is a minute)
          if (prev >= 60) {
            setIsRunning(false);
            setIsDisabled(true);
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleKeyDown = (e) => {
    if (!isRunning) setIsRunning(true);
    if (e.key === ' ') {
      e.preventDefault(); // Prevents extra spaces

      // Check if word is typed correctly
      const correct = inputValue.trim() === words[currentIndex];

      setWordStatus((prev) => [...prev, correct ? 'correct' : 'wrong']);
      if (!correct) setErrorsTyped((prev) => prev + 1);

      setWordsTyped((prev) => prev + 1);
      setInputValue(''); // Reset input
      setCurrentIndex(currentIndex + 1); // On to next word
    }
  };

  const calcResults = () => {
    // Redirect to results page bringing: errors, words typed, and generated text
    navigate('/results', { state: { errorsTyped, wordsTyped, toType } });
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      <section className="mt-9 flex w-xl flex-wrap items-center rounded-lg border-2 bg-gray-300 text-xl">
        {words.map((word, i) => (
          <span
            key={i}
            className={
              'mx-1 text-xl' +
              (i === currentIndex // Handles coloring of words
                ? 'mx-1 text-blue-600 underline'
                : i < currentIndex
                  ? wordStatus[i] === 'correct'
                    ? 'mx-1 text-gray-400'
                    : 'mx-1 text-red-400'
                  : 'mx-1 text-black')
            }
          >
            {word}{' '}
          </span>
        ))}
      </section>

      {!ready ? (
        <>
          <button
            className="mt-12 w-36 rounded-lg border-2 border-gray-800 bg-blue-500 p-0.5 text-xl font-bold text-white hover:bg-blue-400"
            onClick={() => {
              setReady(true);
            }}
          >
            Start Typing
          </button>
          <p className="m-6 text-xl font-bold">Or</p>
          <button
            className="w-36 rounded-lg border-2 border-gray-800 bg-blue-500 p-0.5 text-xl font-bold text-white hover:bg-blue-400"
            onClick={() => navigate('/prompt')}
          >
            New Prompt
          </button>
        </>
      ) : (
        <>
          <input // Timer starts when first key pressed
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            disabled={isDisabled}
            placeholder="Start typing..."
            spellCheck="false"
            className="mt-8 h-12 w-64 rounded-lg border-2 border-blue-400 bg-white text-lg"
          ></input>
          <p className="mt-1 text-lg font-bold">Time: {time}s</p>
        </>
      )}
      {isDisabled && (
        <button
          onClick={() => calcResults()}
          className="mt-3 w-30 rounded-lg border-2 border-gray-800 bg-blue-500 p-0.5 text-xl font-bold text-white hover:bg-blue-400"
        >
          See Results
        </button>
      )}
    </div>
  );
};

export default Test;
