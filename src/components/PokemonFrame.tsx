'use client';

import { Flex, IconButton, Stack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import styles from './PokemonFrame.module.css'

export function PokemonFrame() {
  return (
    <>
      <IconButton
        aria-label='Bulbasaur'
        className={styles.frame}
        icon={PokemonPortrait()}>
        Pokémon
      </IconButton>
    </>
  )
}

function PokemonPortrait() {
  return (
    <Flex className={styles.portrait}>
      <div className={styles.idNumber}>#001</div>
      <Image alt='Bulbasaur' src='https://projectpokemon.org/images/normal-sprite/bulbasaur.gif'/>
      <div className={styles.name}>Bulbasaur</div>
    </Flex>
  )
}