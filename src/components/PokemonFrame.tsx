
import { IPokemonFrame } from "@/contracts"
import { Button, Flex, Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Image } from '@chakra-ui/react'

export function PokemonFrame({ id, name, type1, type2 }: IPokemonFrame) {

  const idPokemon = id.padStart(3, '0')
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <Link
      as={NextLink}
      margin={'0.25rem'}
      flexDirection={'column'}
      borderColor={`var(--type-${type1})`}
      backgroundColor={'white'}
      height={'12rem'}
      width={'9rem'}
      borderWidth={'3px'}
      borderRadius={'6px'}
      href={`/details/${Number(idPokemon)}`}>
      <Flex
        justifyContent={'flex-end'}
        fontSize={'1.20rem'}
        paddingRight={'0.3rem'}
        marginTop={'-0.3rem'}
        color={`var(--type-${type1})`}>
        {`#${idPokemon}`}
      </Flex>
      {/* <Image alt='Bulbasaur' src='https://projectpokemon.org/images/normal-sprite/bulbasaur.gif'/> */}
      <Image
        width={'full'}
        alignSelf={'center'}
        alt={name}
        style={{ marginTop: '-0.8rem' }}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idPokemon}.png`}/>
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        height={'2.5rem'}
        fontSize={'1.3rem'}
        color={'var(--white)'}
        borderRadius={'6px'}
        backgroundColor={`var(--type-${type1})`}>
        {pokemonName}
      </Flex>
    </Link>
  )
}