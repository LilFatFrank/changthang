import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './pages';
import Wrapper from './wrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/*' element={<Wrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
