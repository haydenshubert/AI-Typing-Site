import { useLocation } from 'react-router-dom';

const Test = () => {
  const location = useLocation();
  const toType = location.state?.toType || 'Still waiting...';

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      <p className="w-64 rounded-lg border-2 bg-gray-300">{toType}</p>
      <textarea
        placeholder="Type text here"
        className="w-64 bg-white rounded-lg border-2 border-blue-400"
      ></textarea>
    </div>
  );
};

export default Test;
