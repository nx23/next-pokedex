
import { IPokemonDetail } from "@/contracts"
import { Flex } from "@chakra-ui/react"
import { Image as ImageChakra } from '@chakra-ui/react'
import { DetailsHeader } from "./DetailsHeader"
import { DetailsTable } from "./DetailsTable"

export function PokemonDetail({ id, name, type1, type2, height, weight, stats }: IPokemonDetail) {

  const idPokemon = id.padStart(3, '0')
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <Flex
      width={'full'}
      height={'full'}
      alignSelf={'center'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      marginLeft={'1rem'}
      marginRight={'1rem'}
      background={`var(--type-${type1})`}>

      <DetailsHeader
        pokemonName={pokemonName}
        idPokemon={idPokemon}/>

      <Flex
        justifyContent={'center'}
        width={'full'}>
        <Flex
          zIndex={3}
          width={'96%'}
          borderRadius={'8px'}
          background={'whiteAlpha.300'}>
          <ImageChakra
            width={'full'}
            alt={name}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idPokemon}.png`}/>
        </Flex>
      </Flex>

      <DetailsTable
        type1={type1}
        type2={type2}
        height={height}
        weight={weight}
        stats={stats}
        abilities={[]}
        id={""}
        name={""}/>
     
    </Flex>
  )
}