import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { TemaRouter, TemaRouterWithSection } from './router/TemaRouter';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journal/:themeid" element={<TemaRouter />} />
        <Route path="journal/:themeid/section/:sectionid" element={<TemaRouterWithSection />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App