'use client'

import { Header } from "@/components/Header"
import { Loading } from "@/components/Loading"
import { PokemonDetail } from "@/components/PokemonDetail"
import { IPokemonAbilities, IPokemonStat, IPokemonDetail } from "@/contracts"
import { Flex } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"

async function fetchPokemon(pokemonId: string): Promise<IPokemonDetail> {


  console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
  const pokemonData = await res.json()

  const pokemonDetails = {
    id: String(pokemonData.id),
    name: pokemonData.name,
    type1: pokemonData.types[0].type.name,
    type2: pokemonData.types[1]?.type.name,
    abilities: pokemonData.abilities.map((element: IPokemonAbilities) => {
      return { name: element.ability.name, is_hidden: element.is_hidden }
    }),
    stats: pokemonData.stats.map((element: IPokemonStat) => {
      return { [element.stat.name]: element.base_stat }
    }),
    height: pokemonData.height,
    weight: pokemonData.weight,
  }

  console.log(pokemonDetails)

  return pokemonDetails
}

export default function PageDetails({ params }: { params: {[key: string]: any}}) {

  const { data, status } = useQuery({ queryKey: ['details'], queryFn: () => fetchPokemon(String(params.id)) })

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
      height={'60rem'}>
      <PokemonDetail
        key={data.id}
        id={data.id}
        name={data.name}
        type1={data.type1}
        type2={data.type2}
        />
    </Flex>
  )
}