import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import styles from './SearchBox.module.css'
import Image from 'next/image'
import Lupa from 'public/Lupa.svg'


export function SearchBox() {
  return (
    <InputGroup className={styles.search}>
        <InputLeftElement
          className={styles.searchInputIcon}
          pointerEvents='none'>
            <Image src={Lupa} alt='Lupa' className={styles.lupa}/>
        </InputLeftElement>
      <Input placeholder='Procurar' className={styles.searchInput}/>
    </InputGroup>
  )
}