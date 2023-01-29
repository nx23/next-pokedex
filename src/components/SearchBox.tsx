import { FormControl, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Image from 'next/image'
import Lupa from 'public/Lupa.svg'

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