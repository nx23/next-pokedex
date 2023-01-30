
import Image from 'next/image'
import Pokeball from 'public/Pokeball.svg'
import SortName from 'public/SortName.svg'
import { Flex, IconButton, Stack } from '@chakra-ui/react';
import { SearchBox } from './SearchBox';

export function HomeHeader() {
  return (
    <>
      <Stack
        width={'full'}
        flexDirection={'row'}
        paddingLeft={'1rem'}
        paddingRight={'1rem'}
        justifyContent={'space-between'}>
        <Flex
          width={'2rem'}>
          <Image
            src={Pokeball}
            alt="Pokébola"/>
          <strong style={{paddingLeft: '1rem', color: 'black'}}>Pokédex</strong>
        </Flex>
        <IconButton
          colorScheme='none'
          aria-label='Search Pokémon'
          icon={<Image src={SortName} alt="Sort by Name" style={{
            width: '100%'
          }}/>}
        />

      </Stack>
      <SearchBox />
    </>
  )
}