export enum PokemonType {
  NORMAL,
  FIRE,
  WATER,
  ELECTRIC,
  GRASS,
  ICE,
  FIGHTING,
  POISON,
  GROUND,
  FLYING,
  PSYCHIC,
  BUG,
  ROCK,
  GHOST,
  DRAGON,
  DARK,
  STEEL,
  FAIRY
}

export type PokemonBase = {
    id: number;
    displayId: string;
    name: string;
    displayName: string;
    url: string;
    sprite: string;
}

export type PokemonDetail = {
  id: number;
  displayId: string;
  name: string;
  displayName: string;
  stats: Stat[];
  types: Type[];
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      }
    }
  }
}

type Stat = {
  base_stat: number;
  stat: {
    name: string;
  }
}

type Type = {
  type: {
    name: string;
  }
}