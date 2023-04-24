import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonDetails(props) {
  const [details, setDetails] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon/${props.match.params.url}`;


  useEffect(() => {
    console.log(url);
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch(error => console.log(error));
  }, [url]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <h3>Abilities:</h3>
      <ul>
        {details.abilities.map(ability => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}


export default PokemonDetails;
