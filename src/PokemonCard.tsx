import { PokemonBase } from "./App";
import "./PokemonCard.css";

type PokemonCardProps = {
    pokemon: PokemonBase;
}

export const PokemonCard = (props: PokemonCardProps) => {

    return (<div className="pokemon-card">
        {props.pokemon.name}
        <img src={props.pokemon.sprite} />
    </div>);
}