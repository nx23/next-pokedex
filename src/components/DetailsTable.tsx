import { Flex, Text } from "@chakra-ui/react";
import { TypeBadge } from "./TypeBadge";
import Height from 'public/Height.svg'
import Weight from 'public/Weight.svg'
import Image from "next/image";
import { StatsTable } from "./StatsTable";
import { IPokemonDetail } from "@/contracts";

export function DetailsTable({
  type1,
  type2,
  height,
  weight,
  stats
}: IPokemonDetail) {

  let componenteType2

  if (type2) {
    componenteType2 = <TypeBadge type={type2} />
  }

  return (
    <Flex
      zIndex={2}
      direction={'column'}
      width={'96%'}
      background={'white'}
      borderRadius={'8px'}
      paddingBottom={'1.4rem'}>
      <Flex
        width={'full'}
        justifyContent={'space-evenly'}
        marginTop={'1rem'}>
        <TypeBadge type={type1} />
        {componenteType2}
      </Flex>
      <Flex
        direction={'column'}
        alignItems={'center'}>
        <Text
          marginTop={'1rem'}
          color={`var(--type-${type1})`}
          fontSize={"2xl"}
          fontWeight={'semibold'}>
          About
        </Text>
        <Flex
          width={'40%'}
          justifyContent={'space-between'}>
          <Flex
            flexDirection={'column'}>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                src={Height}
                alt={"Height"}/>
              <Text
                marginLeft={'0.5rem'}
                fontSize={"xl"}
                fontWeight={'semibold'}>{height}</Text>
            </Flex>
            <Text
              marginTop={'-0.5rem'}
              fontSize={"md"}
              color={'gray.500'}
              fontWeight={'semibold'}>Height</Text>
          </Flex>
          <Flex
            flexDirection={'column'}>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                src={Weight}
                alt={"Weight"}/>
              <Text
                marginLeft={'0.5rem'}
                fontSize={"xl"}
                fontWeight={'semibold'}>{weight}</Text>
            </Flex>
            <Text
              marginTop={'-0.5rem'}
              fontSize={"md"}
              color={'gray.500'}
              fontWeight={'semibold'}>Weight</Text>
          </Flex>
        </Flex>
        <StatsTable
          hp={stats.hp}
          attack={stats.attack}
          defense={stats.defense}
          specialAttack={stats.specialAttack}
          specialDefense={stats.specialDefense}
          speed={stats.speed}
          type={type1}
          />
      </Flex>
    </Flex>
  )
}