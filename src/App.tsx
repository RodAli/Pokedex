import React, { useEffect, useState } from 'react';
import Header from './Header';
import { getListOfPokemon } from './NetworkController';
import './App.css';

const App = () => {

  const [listOfPokemon, setListOfPokemon] = useState<any[]>([]);

  useEffect(() => {
    getListOfPokemon((data: any[]) => {
      setListOfPokemon(data);
    }, (message: string) => {
      console.error(message);
    })
  }, [])

  return (
    <div id="app">
      <Header />
      <div>
      {listOfPokemon.map(p => <div>{p.name} {p.url}</div>)}
      </div>
    </div>
  );
}

export default App;
