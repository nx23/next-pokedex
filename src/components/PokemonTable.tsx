import { IPokemonFrame } from "@/contracts";
import { Flex } from "@chakra-ui/react";
import { PokemonFrame } from "./PokemonFrame";

const first10Pokemon: IPokemonFrame[] = [
  {
    id: '1',
    name: 'bulbasaur',
    type1: 'grass'
  },
  {
    id: '2',
    name: 'ivysaur',
    type1: 'grass'
  },
  {
    id: '3',
    name: 'venusaur',
    type1: 'grass'
  },
  {
    id: '4',
    name: 'charmander',
    type1: 'fire'
  },
  {
    id: '5',
    name: 'charmeleon',
    type1: 'fire'
  },
  {
    id: '6',
    name: 'charizard',
    type1: 'fire'
  },
  {
    id: '7',
    name: 'squirtle',
    type1: 'water'
  },
  {
    id: '8',
    name: 'wartotle',
    type1: 'water'
  },
  {
    id: '9',
    name: 'blastoise',
    type1: 'water'
  },
]

export function PokemonTable() {
  return (
    <Flex
      justifyContent={'space-between'}
      marginLeft={'2rem'}
      marginRight={'2rem'}
      flexWrap={'wrap'}>
      {first10Pokemon.map((pokemon) => {
        return (
          <PokemonFrame
            key={pokemon.id}
            type1={pokemon.type1}
            id={pokemon.id}
            name={pokemon.name}/>
        )
      })}
    </Flex>
  )
}