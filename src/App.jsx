import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Prompt from './pages/Prompt';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <nav className="flex bg-gray-200">
        {/* <Link to="/test" className="m-1.5 border hover:bg-green-300">
          Test
        </Link>
        <Link to="/prompt" className="m-1.5 border hover:bg-green-300">
          Prompt
        </Link> */}
        <Link
          to="/home"
          className="m-1 rounded-lg border-2 border-gray-800 bg-blue-300 pt-1.5 pr-4 pb-1.5 pl-4 text-3xl font-bold hover:bg-blue-200"
        >
          Home
        </Link>
        {/* <Link to="/results" className="m-1.5 border hover:bg-green-300">
          Results
        </Link> */}
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/prompt" element={<Prompt />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
