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
    <div className="relative flex min-h-screen flex-col items-center bg-gray-200 pt-24">
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
          <section className="absolute top-120 left-6 h-75 rounded-4xl border-2 p-2.5">
            <p className="border-b">Story Prompt Example:</p>
            <p className="mt-4">"Story about Donkey Kong as president"</p>
            <p className="mt-2 w-80">
              Donkey Kong, the former nemesis of Mario, stood confidently in the
              Oval Office as the newly elected President of the United States.
              His rugged, imposing presence commanded attention from the crowded
              press corps gathered outside the White House. Despite his
              unorthodox rise to power, Kong had won over voters with his...
            </p>
          </section>
          <section className="absolute top-120 right-6 h-75 rounded-4xl border-2 p-2.5">
            <p className="border-b">No Prompt Example:</p>
            <p className="mt-6 w-80">
              The human brain is a complex and fascinating organ that continues
              to puzzle scientists and philosophers alike with its intricacies.
              One of the most intriguing aspects of the brain is its ability to
              reorganize itself in response to new experiences and environments.
              This process, known as neuroplasticity, allows the brain to adapt
              and change throughout...
            </p>
          </section>
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
