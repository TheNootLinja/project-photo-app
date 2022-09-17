import Head from 'next/head'
import styled from 'styled-components'

import TopNav from '../components/TopNav'
import ContentFeed from '../components/ContentFeed'
import BottomNav from '../components/BottomNav'
import { useState } from 'react'
import PopOpenMenu from '../components/PopOpenMenu'

export default function Home() {
  const [ menuOpen, setMenuOpen ] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <Head>
        <title>Plastagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav handleClick={handleClick} menuOpen={menuOpen}/>
      <PopOpenMenu menuOpen={menuOpen}/>
      <ContentFeed />
      <BottomNav />
    </div>
  )
}