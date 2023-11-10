import { useState } from "react";
import { getListOfPokemon } from "./NetworkController";
import { PokemonBase } from "./Types";
import { PokemonCard } from "./PokemonCard";
import "./styles/MainPage.css"
import { useLoaderData } from "react-router-dom";

type LoaderResponse = {
    listOfPokemon: PokemonBase[];
}

export async function MainPageLoader(): Promise<LoaderResponse> {
    const listOfPokemon = await getListOfPokemon();
    return { listOfPokemon };
}

export const MainPage = () => {

    const [searchText, setSearchText] = useState<string>("");

    const { listOfPokemon } = useLoaderData() as LoaderResponse;

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