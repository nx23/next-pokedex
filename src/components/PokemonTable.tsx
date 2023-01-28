import { IPokemonFrame } from "@/contracts";
import { Flex } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PokemonFrame } from "./PokemonFrame";

async function fetchKantoPokemon(): Promise<IPokemonFrame[]> {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const allpokemon = await res.json()

  const pokemonsData = await Promise.all(allpokemon.results.map(async (pokemon: { name: string, url: string }) => {

    const res = await fetch(pokemon.url)
    const pokemonData = await res.json()

    return { name: pokemonData.name, id: String(pokemonData.id), type1: pokemonData.types[0].type.name}
  }))

  return pokemonsData
}

export function PokemonTable() {

  const { data, status } = useQuery({ queryKey: ['pokemons'], queryFn: fetchKantoPokemon })

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>Error!</p>
  }

  return (
    <Flex
      justifyContent={'center'}
      flexWrap={'wrap'}
      padding={'1'}>
      {data.map((pokemon) => {
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