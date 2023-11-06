import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Tema6 from './pages/Tema6';
import Tema7 from './pages/Tema7';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />  
        <Route path = "/journal/:themeid" element={<Tema6 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App