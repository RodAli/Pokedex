import { useNavigate } from "react-router-dom";
import { PokemonBase } from "./Types";
import "./styles/PokemonCard.css";
import { CleanName } from "./Util";

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
            <div>{props.pokemon.displayName}</div>
            <div>{props.pokemon.displayId}</div>
            <img src={props.pokemon.sprite} />
        </div>
    );
}