'use client';

import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ height: '100%', background: 'var(--background)'}}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
