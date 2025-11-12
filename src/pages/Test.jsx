import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Test = () => {
  const location = useLocation();
  const [ready, setReady] = useState(false);
  const toType = location.state?.toType || 'Still waiting...';

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      <section className="m-9 flex w-xl flex-col items-center rounded-lg border-2 bg-gray-300">
        <p className="p-4">{toType}</p>
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
        <textarea
          autoFocus
          placeholder="Type text here"
          spellCheck="false"
          className="w-64 rounded-lg border-2 border-blue-400 bg-white"
        ></textarea>
      )}
    </div>
  );
};

export default Test;
