import { Center } from "@chakra-ui/react";

export function TypeBadge({ type }: { type: string }) {
  return(
    <Center
      height={'1.5rem'}
      paddingLeft={'1rem'}
      paddingRight={'1rem'}
      borderRadius={'20px'}
      fontSize={'lg'}
      color={'white'}
      background={`var(--type-${type})`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Center>
  )
}