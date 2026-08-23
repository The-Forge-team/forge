import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
    </Routes>
  );
}

export default App;
