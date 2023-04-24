import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonTable() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => setPokemons(response.data.results));
  }, []);

  const handleDelete = (name) => {
    setPokemons(pokemons.filter(pokemon => pokemon.name !== name));
  }

  return (
      <table>
      <div className='tab'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Details</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(pokemon => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
            <td><Link to={`/details/${pokemon.url}`}><button>Details</button></Link>
</td>
            <td><button onClick={() => handleDelete(pokemon.name)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
      </div>
    </table>
    
    
  );
}

export default PokemonTable;
