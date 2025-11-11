import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
import Test from './pages/Test';
import Prompt from './pages/Prompt';

function App() {
  return (
    <Router>
      <nav className="flex place-content-center">
        <Link to="/test" className="m-1.5 border hover:bg-green-300">
          Test
        </Link>
        <Link to="/prompt" className="m-1.5 border hover:bg-green-300">
          Prompt
        </Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/test" element={<Test />} />
        <Route path="/prompt" element={<Prompt />} />
      </Routes>
    </Router>
  );
}

export default App;
