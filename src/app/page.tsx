'use client'

import { Header } from '@/components/Header'
import { Loading } from '@/components/Loading';
import { PokemonTable } from '@/components/PokemonTable';
import { IPokemonFrame } from '@/contracts';
import { Flex } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";

async function fetchPokemons(props: { offset: number, limit: number }): Promise<IPokemonFrame[]> {
  const { offset, limit } = props

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  const allpokemon = await res.json()

  const pokemonsData = await Promise.all(allpokemon.results.map(async (pokemon: { name: string, url: string }) => {

    const res = await fetch(pokemon.url)
    const pokemonData = await res.json()

    return {
      id: String(pokemonData.id),
      name: pokemonData.name,
      type1: pokemonData.types[0].type.name,
      type2: pokemonData.types[1]?.type.name
    }
  }))

  return pokemonsData
}

export default function Home() {

  const { data, status } = useQuery({ queryKey: ['pokemons'], queryFn: () => fetchPokemons({ offset: 0, limit: 151 }) })

  if (status === 'loading') {
    return (
      <Flex
        height={'full'}
        alignItems={'center'}
        flexDirection={'column'}
        backgroundColor={'var(--background)'}>
        <Header />
        <Loading />
      </Flex>
    )
  }

  if (status === 'error') {
    return <p>Error!</p>
  }

  return (
    <Flex
      height={'full'}
      alignItems={'center'}
      flexDirection={'column'}
      backgroundColor={'var(--background)'}>
      <Header />
      <PokemonTable data={data}/>
    </Flex>
  )
}
