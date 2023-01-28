'use client';

import { Header } from '@/components/Header'
import { PokemonTable } from '@/components/PokemonTable';
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      flexDirection={'column'}
      backgroundColor={'var(--background)'}
      >
      <Header />
      <PokemonTable />
    </Flex>
  )
}
