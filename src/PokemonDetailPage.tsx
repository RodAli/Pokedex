import { useLoaderData, useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    const onBackBtnClick = () => {
        navigate(`/`);
    }

    const statData: any[][] = [["Name", "Value", { role: "style" }]];
    pokemonData.stats.forEach(stat => {
        statData.push([TypeNameMap(stat.stat.name), stat.base_stat, StatToBarStyle(stat.base_stat)])
    });

    return <div id="detail-page-container">
        <div id="back-btn-container">
            <div id="icon-wrap">
                <svg id="back-btn" onClick={onBackBtnClick} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
            </div>
        </div>

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
    title: "",
    chartArea: { width: "50%" },
    hAxis: {
      title: "",
      minValue: 0,
    },
    vAxis: {
      title: "",
    },
    legend: { position: "none" }
};

const StatToBarStyle = (stat: number): string => {
    if (stat < 60) {
        return "color: #fc5603; opacity: 0.7;";
    } else if (stat < 100) {
        return "color: #fcdb03; opacity: 0.7;";
    } else if (stat < 150) {
        return "color: #12ad07; opacity: 0.7;";
    } else {
        return "color: #009eed; opacity: 0.7;";
    }
}

const TypeNameMap = (name: string): string => {
    switch(name) {
        case "hp":
            return "HP";
        case "attack":
            return "Attack";
        case "defense":
            return "Defense";
        case "special-attack":
            return "Sp. Atk";
        case "special-defense":
            return "Sp. Def";
        case "speed":
            return "Speed";
        default:
            return "";
    }
}

export default PokemonDetailPage;