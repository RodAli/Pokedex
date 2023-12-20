import { useLoaderData } from "react-router-dom";
import { getPokemon } from "./NetworkController";
import { PokemonDetail } from "./Types";
import "./styles/PokemonDetailPage.css"

type LoaderResponse = {
    pokemonData: PokemonDetail;
}

export async function PokemonDetailPageLoader({ params }: any): Promise<LoaderResponse> {
    const pokemonData = await getPokemon(params.pokemonId);
    return { pokemonData };
}

const PokemonDetailPage = () => {
    const { pokemonData } = useLoaderData() as LoaderResponse;
    console.log(pokemonData);
    return <div id="detail-page-container">
        <img id="pokemon-sprite" src={pokemonData.sprites.other["official-artwork"].front_default} width={100} height={100}/>
        
        <div id="name-container">
            <div>{pokemonData.displayName}</div>
            <div>{pokemonData.displayId}</div>
        </div>

        <div id="type-container">
            <div>{pokemonData.types[0]?.type.name}</div>
            <div>{pokemonData.types[1]?.type.name}</div>
        </div>
        
        {pokemonData.stats.map((s, i) => <div key={i}>{s.stat.name} {s.base_stat}</div>)}
    </div>;
}

export default PokemonDetailPage;