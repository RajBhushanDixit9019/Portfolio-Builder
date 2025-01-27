import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import Preview from './pages/Preview';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/editor/:portfolioId" element={<Editor />} />
          <Route path="/preview/:portfolioId" element={<Preview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 