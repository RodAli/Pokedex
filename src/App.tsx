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
  const [searchText, setSearchText] = useState<string>("");

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
      <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
      <div id="pokemon-card-list-container">
        {listOfPokemon
          .filter(p => p.name.includes(searchText))
          .map(p => <PokemonCard key={p.id} pokemon={p} />)
        }
      </div>
    </div>
  );
}

export default App;
