import { IPokemonFrame } from "@/contracts";
import { Flex } from "@chakra-ui/react";
import { PokemonFrame } from "./PokemonFrame";

export function PokemonTable(props: { data: IPokemonFrame[] }) {

  const { data } = props

  return (
    <Flex
      justifyContent={'center'}
      flexWrap={'wrap'}
      padding={'1'}>
      {data.map((pokemon) => {
        return (
          <PokemonFrame
            key={pokemon.id}
            type1={pokemon.type1}
            id={pokemon.id}
            name={pokemon.name}/>
        )
      })}
    </Flex>
  )
}