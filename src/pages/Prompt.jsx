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
          <p className="text-xl">
            Enter prompt here
            <br />
            (50 character limit):
          </p>
          <input
            value={userPrompt}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={50}
            type="text"
            placeholder="Prompt..."
            className="mt-6 rounded-md border-2 border-blue-400 p-2 text-xl"
          ></input>
          <button
            className="mt-3 rounded-2xl border p-2 text-xl"
            onClick={handleSend}
          >
            Send prompt
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Prompt;
