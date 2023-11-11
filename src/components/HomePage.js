// src/components/HomePage.js
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-6">Welcome to the HomePage</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/game" className="text-lg text-blue-600 hover:underline">Game</Link></li>
          <li><Link to="/pet" className="text-lg text-blue-600 hover:underline">Pet</Link></li>
          <li><Link to="/quiz" className="text-lg text-blue-600 hover:underline">Quiz</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
