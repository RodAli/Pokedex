import { PokemonType } from "./Types";
import "./styles/TypeBadge.css";

type TypeBadgeProps = {
    type: string;
}

export const TypeBadge = (props: TypeBadgeProps) => {

    if (props.type === null || props.type === "") return <div></div>;

    // Convert from string to enum type
    const pokemonType = TextToPokemonTypeMap[props.type.toLowerCase()];

    switch(pokemonType) {
        case PokemonType.NORMAL:
            return <div className="type-badge normal-badge">NORMAL</div>;
        case PokemonType.FIRE:
            return <div className="type-badge fire-badge">FIRE</div>;
        case PokemonType.WATER:
            return <div className="type-badge water-badge">WATER</div>;
        case PokemonType.ELECTRIC:
            return <div className="type-badge electric-badge">ELECTRIC</div>;
        case PokemonType.GRASS:
            return <div className="type-badge grass-badge">GRASS</div>;
        case PokemonType.ICE:
            return <div className="type-badge ice-badge">ICE</div>;
        case PokemonType.FIGHTING:
            return <div className="type-badge fighting-badge">FIGHTING</div>;
        case PokemonType.POISON:
            return <div className="type-badge poison-badge">POISON</div>;
        case PokemonType.GROUND:
            return <div className="type-badge ground-badge">GROUND</div>;
        case PokemonType.FLYING:
            return <div className="type-badge flying-badge">FLYING</div>;
        case PokemonType.PSYCHIC:
            return <div className="type-badge psychic-badge">PSYCHIC</div>;
        case PokemonType.BUG:
            return <div className="type-badge bug-badge">BUG</div>;
        case PokemonType.ROCK:
            return <div className="type-badge rock-badge">ROCK</div>;
        case PokemonType.GHOST:
            return <div className="type-badge ghost-badge">GHOST</div>;
        case PokemonType.DRAGON:
            return <div className="type-badge dragon-badge">DRAGON</div>;
        case PokemonType.DARK:
            return <div className="type-badge dark-badge">DARK</div>;
        case PokemonType.STEEL:
            return <div className="type-badge steel-badge">STEEL</div>;
        case PokemonType.FAIRY:
            return <div className="type-badge fairy-badge">FAIRY</div>;
        default:
            return <div></div>
    }
}

// Conversion map from string type to enum type
const TextToPokemonTypeMap: { [key:string]: PokemonType } = {
    "normal": PokemonType.NORMAL,
    "fire": PokemonType.FIRE,
    "water": PokemonType.WATER,
    "electric": PokemonType.ELECTRIC,
    "grass": PokemonType.GRASS,
    "ice": PokemonType.ICE,
    "fighting": PokemonType.FIGHTING,
    "poison": PokemonType.POISON,
    "ground": PokemonType.GROUND,
    "flying": PokemonType.FLYING,
    "psychic": PokemonType.PSYCHIC,
    "bug": PokemonType.BUG,
    "rock": PokemonType.ROCK,
    "ghost": PokemonType.GHOST,
    "dragon": PokemonType.DRAGON,
    "dark": PokemonType.DARK,
    "steel": PokemonType.STEEL,
    "fairy": PokemonType.FAIRY
}