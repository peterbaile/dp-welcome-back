import React from 'react'
import { DFPSlotsProvider, AdSlot, DFPManager } from 'react-dfp'

import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from '../components/Nav'
import WordWithLine from '../components/WordWithLine'
import PicWithLine from '../components/PicWithLine'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />

      <NavBar />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}

      <WordWithLine word="NEWS" />

      <WordWithLine word="OPINION" />

      <WordWithLine word="SPORTS" />

      <PicWithLine img="utb-logo-with-text.png" />

      
      {/* <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-Leaderboard" sizes={[[728, 90]]} />
      </DFPSlotsProvider> */}
    </>
  )
}

export default IndexPage
