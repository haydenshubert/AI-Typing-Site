import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Test = () => {
  const location = useLocation();
  const toType = location.state?.toType || 'ERROR: No generated text';
  const words = toType.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [ready, setReady] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault(); // Prevents extra spaces
      // words typed + 1 after space //
      // Check if word is typed correctly
      if (inputValue.trim() !== words[currentIndex]) {
        console.log('Error + 1');
      }
      setInputValue(''); // Reset input
      setCurrentIndex(currentIndex + 1); // On to next word
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      <section className="m-9 flex w-xl flex-wrap items-center rounded-lg border-2 bg-gray-300">
        {words.map((word, i) => (
          <span
            key={i}
            className={
              'mx-1 text-lg' +
              (i < currentIndex
                ? 'mx-1 text-lg text-gray-400'
                : i === currentIndex
                  ? 'mx-1 text-lg text-blue-600 underline'
                  : '')
            }
          >
            {word}{' '}
          </span>
        ))}
      </section>

      {!ready ? (
        <>
          <button
            className="mt-4 w-16 border-2 border-gray-800 bg-blue-500 font-bold text-white"
            onClick={() => {
              setReady(true);
            }}
          >
            Start
          </button>
        </>
      ) : (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Start typing..."
          spellCheck="false"
          className="h-12 w-64 rounded-lg border-2 border-blue-400 bg-white text-lg"
        ></input>
      )}
    </div>
  );
};

export default Test;
