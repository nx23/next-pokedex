'use client'

import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { Flex } from "@chakra-ui/react";

export default function Teste() {
  return (
    <Flex
      alignItems={'center'}
      flexDirection={'column'}>
      <Header />
      <Loading />
    </Flex>
  )
}