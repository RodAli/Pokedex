import { useLoaderData } from "react-router-dom";
import { getPokemon } from "./NetworkController";
import { PokemonDetail } from "./Types";

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
    return <div>
        <img src={pokemonData.sprites.other["official-artwork"].front_default} width={100} height={100}/>
        <div>{pokemonData.displayName}</div>
        <div>{pokemonData.displayId}</div>
        {pokemonData.types.map((t, i) => <div key={i}>{t.type.name}</div>)}
        {pokemonData.stats.map((s, i) => <div key={i}>{s.stat.name} {s.base_stat}</div>)}
    </div>;
}

export default PokemonDetailPage;