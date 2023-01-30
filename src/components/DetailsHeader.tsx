
import { Box, Center, Flex, Link } from "@chakra-ui/react"
import Image from "next/image"
import BackArrow from 'public/BackArrow.svg'
import NextLink from 'next/link'

export function DetailsHeader({
  pokemonName,
  idPokemon
}: {
  pokemonName: string,
  idPokemon: string
}) {

  return (
    <Flex
      width={'full'}
      justifyContent={'space-between'}
      paddingLeft={'2rem'}
      paddingRight={'2rem'}
      alignItems={'center'}>
      <Center>
        <Link
          as={NextLink}
          href={`/`}>
          <Image
            src={BackArrow}
            alt="Back"
            style={{
              marginLeft: '-1rem',
              zIndex: 2,
              width: '3rem',
            }}/>
        </Link>
      </Center>
      <Center
        fontSize={'3rem'}
        fontWeight={'bold'}
        color={'var(--white)'}>
        {pokemonName}
      </Center>
      <Box
        marginRight={'-1rem'}
        fontSize={'1.3rem'}
        fontWeight={'bold'}
        color={'var(--white)'}>
        {`#${idPokemon}`}
      </Box>
    </Flex>
  )
}