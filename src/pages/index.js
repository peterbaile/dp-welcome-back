import React from "react"
import { Link } from "gatsby"
import { DFPSlotsProvider, AdSlot } from 'react-dfp'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <DFPSlotsProvider dfpNetworkId="12234093">
      <AdSlot adUnit="/DP.com-Leaderboard" sizes={[[728, 90], [728, 90]]} />
    </DFPSlotsProvider>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
