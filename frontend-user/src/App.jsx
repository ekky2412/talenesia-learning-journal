import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HeadersTema from './pages/HeadersTema';
import { TemaRouter } from './router/TemaRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="/journal/:username/:themeid" element={<HeadersTema />} />
        <Route exact path="/journal/:username/:themeid/:sectionid" element={<TemaRouter />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
