import { useLoaderData } from "react-router-dom";
import { getPokemon } from "./NetworkController";
import { PokemonDetail, PokemonType } from "./Types";
import "./styles/PokemonDetailPage.css"
import { TypeBadge } from "./TypeBadge";
import { Chart } from "react-google-charts";

type LoaderResponse = {
    pokemonData: PokemonDetail;
}

export async function PokemonDetailPageLoader({ params }: any): Promise<LoaderResponse> {
    const pokemonData = await getPokemon(params.pokemonId);
    return { pokemonData };
}

const PokemonDetailPage = () => {
    const { pokemonData } = useLoaderData() as LoaderResponse;

    const statData: any[][] = [["Name", "Value"]];
    pokemonData.stats.forEach(stat => {
        statData.push([stat.stat.name, stat.base_stat])
    });

    return <div id="detail-page-container">
        <img id="pokemon-sprite" src={pokemonData.sprites.other["official-artwork"].front_default} width={100} height={100}/>
        
        <div id="name-container">
            <div>{pokemonData.displayName}</div>
            <div>{pokemonData.displayId}</div>
        </div>

        <div id="type-container">
            <TypeBadge type={pokemonData.types[0]?.type.name} />
            {pokemonData.types[1] ? <>
                <div style={{width: "7px"}}></div>
                <TypeBadge type={pokemonData.types[1]?.type.name} />
            </> : null}
        </div>
        
        
        {/* {pokemonData.stats.map((s, i) => <div key={i}>{s.stat.name} {s.base_stat}</div>)} */}
        <Chart 
            chartType="BarChart"
            width="100%"
            height="400px"
            data={statData}
            options={options}
        />
        

    </div>;
}

  export const options = {
    title: "Hello",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Value",
      minValue: 0,
    },
    vAxis: {
      title: "Name",
    },
  };

export default PokemonDetailPage;