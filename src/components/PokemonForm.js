import React, { useState } from 'react';
import './PokemonForm.css';

function PokemonForm(props) {
  const [name, setName] = useState('');
  const [ability, setAbility] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, ability });
    setName('');
    setAbility('');
    window.location.href = '/'
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Ability:
        <input type="text" value={ability} onChange={event => setAbility(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Pokemon</button>
    </form>
  );
}

export default PokemonForm;
