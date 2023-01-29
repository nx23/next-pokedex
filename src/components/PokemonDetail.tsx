
import { IPokemonFrame } from "@/contracts"
import { Button, Flex, Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Image } from '@chakra-ui/react'

export function PokemonDetail({ id, name, type1, type2 }: IPokemonFrame) {

  const idPokemon = id.padStart(3, '0')
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <Flex
      width={'full'}
      height={'full'}
      alignSelf={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      borderColor={`var(--type-${type1})`}
      backgroundColor={'white'}
      borderWidth={'3px'}
      borderRadius={'6px'}>
     <Flex
        justifyContent={'flex-end'}
        fontSize={'3rem'}
        marginTop={'-0.3rem'}
        paddingRight={'0.3rem'}
        color={`var(--type-${type1})`}>
        {`#${idPokemon}`}
      </Flex>
      <Image
        width={'30rem'}
        alt={name}
        style={{ marginTop: '-1.2rem' }}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idPokemon}.png`}/>
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        width={'full'}
        fontSize={'3rem'}
        color={'var(--white)'}
        borderRadius={'6px'}
        backgroundColor={`var(--type-${type1})`}>
        {pokemonName}
      </Flex>
    </Flex>
  )
}