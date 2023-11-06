import { PokemonBase } from "./App";
import "./PokemonCard.css";

type PokemonCardProps = {
    pokemon: PokemonBase;
}

export const PokemonCard = (props: PokemonCardProps) => {
    return (<div className="pokemon-card">
        <div>{props.pokemon.name}</div>
        <div>#{props.pokemon.id}</div>
        <img src={props.pokemon.sprite} />
    </div>);
}