import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <BrowserRouter className="body">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
