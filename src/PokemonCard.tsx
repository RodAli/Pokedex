import { useNavigate } from "react-router-dom";
import { PokemonBase } from "./Types";
import "./styles/PokemonCard.css";

type PokemonCardProps = {
    pokemon: PokemonBase;
}

export const PokemonCard = (props: PokemonCardProps) => {

    const navigate = useNavigate();

    const onCardClick = (_: any) => {
        navigate(`/pokemon/${props.pokemon.id}`);
    }

    return (
        <div className="pokemon-card" onClick={onCardClick}>
            <div>{props.pokemon.name}</div>
            <div>#{props.pokemon.id}</div>
            <img src={props.pokemon.sprite} />
        </div>
    );
}