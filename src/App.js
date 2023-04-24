import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonTable from './components/PokemonTable';
import PokemonForm from './components/PokemonForm';
import Navbar from './components/Navbar';
import PokemonDetails from './components/PokemonDetails';

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const handleAdd = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<PokemonTable />} />
      <Route path="/add-pokemon" element={<PokemonForm classname = "form" onSubmit={handleAdd} />} />
      <Route path="/details/:url" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
