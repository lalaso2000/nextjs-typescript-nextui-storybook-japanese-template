import { Button, Container, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>init page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Text h1>Init page</Text>
          <Text>ここに本文</Text>
          <Button>Button</Button>
        </Container>
      </main>
    </div>
  )
}

export default Home
