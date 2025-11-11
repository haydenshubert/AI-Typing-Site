import { useState } from 'react';
// import { useNavigate } from 'react-dom';
import { handleInput } from '../services/OllamaAPI';

const Prompt = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setUserPrompt(e.target.value);
  };

  const handleSend = () => {
    handleInput(userPrompt);
    setLoading(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      {!loading ? (
        <>
          <p>Enter prompt here: </p>
          <input
            value={userPrompt}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Enter prompt ..."
            className="border-2 border-blue-400 rounded-md mt-36"
          ></input>
          <button onClick={handleSend}>Send prompt</button>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-xl animate-pulse">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Prompt;
