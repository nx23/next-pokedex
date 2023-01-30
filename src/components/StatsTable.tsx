import { IPokemonStats } from "@/contracts";
import { Flex } from "@chakra-ui/react";
import { StatsMeter } from "./StatsMeter";

export function StatsTable({
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  type
} : IPokemonStats & {
  type: 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy'
}) {

  return (
    <Flex
      direction={'column'}
      width={'75%'}>
      <StatsMeter
        name={'HP'}
        value={hp}/>
      <StatsMeter
        name={'Attack'}
        value={attack}/>
      <StatsMeter
        name={'Defense'}
        value={defense}/>
      <StatsMeter
        name={'Special-Attack'}
        value={specialAttack}/>
      <StatsMeter
        name={'Special-Defense'}
        value={specialDefense}/>
      <StatsMeter
        name={'Speed'}
        value={speed}/>
    </Flex>
  )
}