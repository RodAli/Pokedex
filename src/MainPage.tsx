import { useEffect, useState } from "react";
import { getListOfPokemon } from "./NetworkController";
import { PokemonBase } from "./Types";
import { PokemonCard } from "./PokemonCard";


export const MainPage = () => {

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
        <>
            <div>Pokedex</div>
            <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <div id="pokemon-card-list-container">
                {listOfPokemon
                    .filter(p => p.name.includes(searchText))
                    .map(p => <PokemonCard key={p.id} pokemon={p} />)
                }
            </div>
        </>
    );
}

export default MainPage;