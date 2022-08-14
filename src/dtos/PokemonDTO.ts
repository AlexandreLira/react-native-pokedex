type PokemonTypes =  'grass' |
'poison' |
'fire' |
'flying' |
'water' |
'bug' |
'normal' |
'electric' |
'ground' |
'fairy' |
'fighting' |
'psychic' |
'ice' |
'ghost' |
'rock' |
'dark' |
'steel' |
'dragon'

export interface PokemonDTO {
  abilities: {
    ability: {
      name: string;
      url: string;
    },
    is_hidden: boolean;
    slot: number;
  }[],

  name: string;
  id: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      }
    }
  }
  types: {
    type: {
      name: PokemonTypes;
    }
  }[];

  stats: {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
  }[]
}

export interface PokemonsDTO {
  count: number,
  next: string | null,
  previous: string | null,
  results: {
    name: string,
    url: string
  }[],

}