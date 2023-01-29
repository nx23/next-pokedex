import { Spinner, Stack } from "@chakra-ui/react";

export function Loading() {
  return (
    <Stack
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingTop={'2rem'}>
      <Spinner size='xl'/>
      <p style={{ paddingBottom: '0.7rem', paddingLeft: '1rem' }}>Loading...</p>
    </Stack>
  )
}