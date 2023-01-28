
import { IPokemonFrame } from "@/contracts";
import { Button, Flex } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export function PokemonFrame(props: IPokemonFrame) {

  const { id, name, type1, type2 } = props

  const idPokemon = id.padStart(3, '0')

  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Button
      marginTop={'1rem'}
      flexDirection={'column'}
      borderColor={`var(--type-${type1})`}
      backgroundColor={'white'}
      height={'12rem'}
      width={'10rem'}
      borderWidth={'2px'}
      borderRadius={'6px'}>
      <Flex
        marginLeft={'6rem'}
        fontSize={'1.25rem'}
        color={`var(--type-${type1})`}>
        {`#${idPokemon}`}
      </Flex>
      {/* <Image alt='Bulbasaur' src='https://projectpokemon.org/images/normal-sprite/bulbasaur.gif'/> */}
      <Image
        width={'full'}
        alt={name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idPokemon}.png`}/>
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        paddingTop={'0.4rem'}
        width={'10rem'}
        height={'2.5rem'}
        fontSize={'1.5rem'}
        color={'var(--white)'}
        borderRadius={'6px'}
        backgroundColor={`var(--type-${type1})`}>
        {pokemonName}
      </Flex>
    </Button>
  )
}