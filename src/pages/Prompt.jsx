import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleInput } from '../services/OllamaAPI';

const Prompt = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserPrompt(e.target.value);
  };

  const handleSend = async () => {
    setLoading(true);
    const genText = await handleInput(userPrompt);

    navigate('/test', { state: { toType: genText } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200 pt-24">
      {!loading ? (
        <>
          <p className="p-2 text-3xl">
            This is where you will enter your one sentence prompt.
          </p>
          <p className="text-3xl text-gray-400">(75 character limit)</p>
          <input
            value={userPrompt}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={75}
            type="text"
            placeholder="Prompt..."
            className="mt-36 w-100 rounded-md border-2 border-blue-900 p-2 text-3xl"
          ></input>
          <button
            className="mt-12 h-16 w-48 rounded-lg border-2 border-gray-800 bg-blue-500 p-0.5 text-2xl font-bold text-white hover:bg-blue-400"
            onClick={handleSend}
          >
            Send Prompt
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <p className="animate-pulse text-4xl">Generating text...</p>
        </div>
      )}
    </div>
  );
};

export default Prompt;
