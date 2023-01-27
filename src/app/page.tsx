'use client';

import { Header } from '@/components/Header'
import { PokemonFrame } from '@/components/PokemonFrame'
import { Flex } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Flex className={styles.body}>
      <Header />
      <PokemonFrame />
    </Flex>
  )
}
