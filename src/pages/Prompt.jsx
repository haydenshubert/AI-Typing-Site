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
    // handleInput(userPrompt);
    setLoading(true);
    const genText = await handleInput(userPrompt);
    console.log(genText);

    navigate('/test', { state: { toType: genText } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      {!loading ? (
        <>
          <p>Enter prompt here: </p>
          <input
            value={userPrompt}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={50}
            type="text"
            placeholder="Enter prompt ..."
            className="mt-36 rounded-md border-2 border-blue-400"
          ></input>
          <button onClick={handleSend}>Send prompt</button>
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
