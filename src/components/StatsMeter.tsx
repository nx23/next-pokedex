import { Flex, Text, Progress } from "@chakra-ui/react"

export function StatsMeter({
  name,
  value
}: {
  name: string,
  value: number,
}) {
  return (
    <Flex
      direction={'column'}
      marginTop={'1rem'}>
      <Text
        fontWeight={'medium'}
        fontSize={'md'}>
        {name} {value}
      </Text>
      <Progress
        borderRadius={'8px'}
        value={value}
        colorScheme='twitter'
        size='sm'
        max={255}/>
    </Flex>
  )
}