'use client';

import styles from './Header.module.css'
import Image from 'next/image'
import Pokeball from 'public/Pokeball.svg'
import SortName from 'public/SortName.svg'
import { Flex, IconButton, Spacer } from '@chakra-ui/react';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <>
      <Flex className={styles.header}>
        <Flex className={styles.title}>
          <Image src={Pokeball} alt="Pokébola"/>
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