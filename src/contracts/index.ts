
export interface IPokemonFrame {
  id: string
  name: string
  type1: 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy'
  type2?: 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy'
}

export interface IPokemonAbilities {
  ability: {
    name: string
    url: string
  },
  is_hidden: boolean
  slot: number
}

export interface IPokemonStat {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string
  }
}

export interface IPokemonStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface IPokemonDetail extends IPokemonFrame {

  abilities: IPokemonAbilities[]

  height: number
  weight: number

  stats: IPokemonStats
}