
import Image from 'next/image'
import Pokeball from 'public/Pokeball.svg'
import SortName from 'public/SortName.svg'
import { Flex, IconButton, Spacer } from '@chakra-ui/react';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <>
      <Flex
        fontSize={'1.75rem'}
        height={'80px'}
        padding={'1rem'}
        alignItems={'center'}>
        <Flex
          alignItems={'center'}
          width={'2rem'}
          height={'2rem'}
          margin={'1rem'}>
          <Image
            src={Pokeball}
            alt="Pokébola"/>
          <strong>Pokédex</strong>
        </Flex>

        <Spacer />

        <IconButton
          colorScheme='none'
          aria-label='Search Pokémon'
          icon={<Image src={SortName} alt="Sort by Name"/>}
        />
        
      </Flex>
      <SearchBox />
    </>
  )
}