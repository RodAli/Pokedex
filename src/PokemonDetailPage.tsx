import { useLoaderData } from "react-router-dom";
import { getPokemon } from "./NetworkController";
import { PokemonDetail, PokemonType } from "./Types";
import "./styles/PokemonDetailPage.css"
import { TypeBadge } from "./TypeBadge";

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
            <TypeBadge type={pokemonData.types[0]?.type.name} />
            <div style={{width: "7px"}}></div>
            {pokemonData.types[1] ? <TypeBadge type={pokemonData.types[1]?.type.name} /> : null}
        </div>
        
        
        {pokemonData.stats.map((s, i) => <div key={i}>{s.stat.name} {s.base_stat}</div>)}
    </div>;
}

export default PokemonDetailPage;