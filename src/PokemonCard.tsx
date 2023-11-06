import "./PokemonCard.css"

type PokemonCardProps = {
    name: string;
}

export const PokemonCard = (props: PokemonCardProps) => {

    return (<div className="pokemon-card">
        {props.name}
    </div>);
}