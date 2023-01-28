import { FormControl, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Image from 'next/image'
import Lupa from 'public/Lupa.svg'
import React, { useState } from 'react';

async function getPokemonData(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data
}



export function SearchBox() {

  return (
    <FormControl>
      <InputGroup>
          <InputLeftElement
            left={'1.25rem'}
            pointerEvents='none'>
            <Image
              src={Lupa}
              alt='Lupa'
              width={'19'}
              />
          </InputLeftElement>
        <Input
          marginLeft={'1rem'}
          marginRight={'1rem'}
          placeholder='Procurar'
          borderRadius={'12px'}
          borderColor={'black'}
          backgroundColor={'var(--white)'}
          />
      </InputGroup>
    </FormControl>
  )
}