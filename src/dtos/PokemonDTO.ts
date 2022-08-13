export interface PokemonDTO {
  name: string;
  id: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }
  types: {
    type: {
      name: string;
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