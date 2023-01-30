'use client'

import { Loading } from "@/components/Loading"
import { PokemonDetail } from "@/components/PokemonDetail"
import { IPokemonAbilities, IPokemonStat, IPokemonDetail } from "@/contracts"
import { Flex } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"

async function fetchPokemon(pokemonId: string): Promise<IPokemonDetail> {


  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
  const pokemonData = await res.json()

  const pokemonDetails: IPokemonDetail = {
    id: String(pokemonData.id),
    name: pokemonData.name,
    type1: pokemonData.types[0].type.name,
    type2: pokemonData.types[1]?.type.name,
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0
    },
    abilities: pokemonData.abilities.map((element: IPokemonAbilities) => {
      return { name: element.ability.name, is_hidden: element.is_hidden }
    }),
    height: pokemonData.height,
    weight: pokemonData.weight,
  }

  pokemonData.stats.map((element: IPokemonStat) => {
    let statsName: string

    if (element.stat.name.includes('-')) {
      const name = element.stat.name.split('-')
      statsName = name[0] + name[1].charAt(0).toUpperCase() + name[1].slice(1)
    } else {
      statsName = element.stat.name
    }

    //@ts-ignore
    pokemonDetails.stats[statsName] = element.base_stat
  }),

  console.log(pokemonDetails)

  return pokemonDetails
}

export default function PageDetails({ params }: { params: {[key: string]: any}}) {

  const { data, status } = useQuery({ queryKey: ['details'], queryFn: () => fetchPokemon(String(params.id)) })

  if (status === 'loading') {
    return (
      <Flex
        alignItems={'center'}
        flexDirection={'column'}
        backgroundColor={'var(--background)'}>
        <Loading />
      </Flex>
    )
  }

  if (status === 'error') {
    return <p>Error!</p>
  }

  return (
    <Flex
      flexDirection={'column'}
      backgroundColor={'var(--background)'}>
      <PokemonDetail
        key={data.id}
        id={data.id}
        name={data.name}
        type1={data.type1}
        type2={data.type2}
        height={data.height}
        weight={data.weight}
        abilities={data.abilities}
        stats={data.stats}
        />
    </Flex>
  )
}