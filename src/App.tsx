import React, { useEffect, useState } from 'react';
import Header from './Header';
import { getListOfPokemon } from './NetworkController';
import './App.css';
import { PokemonCard } from './PokemonCard';

type PokemonBase = {
  name: string;
  url: string;
}

const App = () => {

  const [listOfPokemon, setListOfPokemon] = useState<PokemonBase[]>([]);

  useEffect(() => {
    getListOfPokemon((data: PokemonBase[]) => {
      setListOfPokemon(data);
    }, (message: string) => {
      console.error(message);
    })
  }, [])

  return (
    <div id="app">
      <Header />
      <div>Pokedex</div>
      <input type='text' onChange={(e) => console.log(e.target.value)}></input>
      <div id="pokemon-card-list-container">
      {listOfPokemon.map(p => <PokemonCard name={p.name} />)}
      </div>
    </div>
  );
}

export default App;
