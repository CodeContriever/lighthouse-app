import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps, session }) {
  // const { Component, pageProps } = props;
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>

  )
}

export default MyApp
