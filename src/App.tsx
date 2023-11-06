import React, { useEffect, useState } from 'react';
import Header from './Header';
import { getListOfPokemon } from './NetworkController';
import './App.css';
import { PokemonCard } from './PokemonCard';

export type PokemonBase = {
  id: number;
  name: string;
  url: string;
  sprite: string;
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
      {listOfPokemon.map(p => <PokemonCard key={p.id} pokemon={p} />)}
      </div>
    </div>
  );
}

export default App;
