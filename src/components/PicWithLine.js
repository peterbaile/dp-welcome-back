import React from 'react'
import s from 'styled-components'

import { KARLA_BOLD, KARLA_REGULAR } from '../utils/font'

const UTB_BLUE = '#456CB3'
const HEADLINE_DARK_GRAY = '#283033'
const SUBHEAD_LIGHT_GRAY = '#707070'

const Wrapper = s.div` 
  text-align: center; 
  border-top: 2px solid #456CB3;
  background: #F6F7F7;
  margin: 0 5rem;
  margin-top: 10rem;

  img {
    left: 40%;
    background-color: #fff;
    padding: 1rem 2rem;
    border-top: 2px solid ${UTB_BLUE};
    border-bottom: 2px solid ${UTB_BLUE};
  }
`
const ArticleHeader = s.div`
  font-size: 120%;
  color: ${UTB_BLUE};
  ${KARLA_BOLD}
`

const ArticleHeadline = s.div`
  margin-top: 0.3rem;
  font-size: 150%;
  color: ${HEADLINE_DARK_GRAY};
  line-height: 90%;
  ${KARLA_BOLD}
`

const ByLine = s.div`
  margin-top: 1rem;
  font-size: 70%;
  color: ${SUBHEAD_LIGHT_GRAY};
  ${KARLA_REGULAR}
`

const MoreLink = s.div`
  font-size: 130%;
  color: ${UTB_BLUE};

  ${KARLA_BOLD}
`

const PicWithLine = ({ img }) => (
  <Wrapper>
    <img src={`/img/${img}`} height="110px" style={{ transform: 'translate(0, -4rem)' }}/>
    <br/>
    <div>Under the Button is the University of Pennsylvania's truly independent satire publication</div>
    <div>Think the Onion, but better (or worse, if you ask the DP).</div>

    <div className="row" style={{ marginBottom: '2rem', padding: '0 2rem' }}>
      <div className="col">
        <ArticleHeader> GENEROUS </ArticleHeader>
        <ArticleHeadline> Penn Gives Students Half-Filled Fro-Yo Punch Cards as Financial Aid </ArticleHeadline>
        <ByLine> BY KEVIN XU </ByLine>
        <span color={UTB_BLUE}> &#8594; </span>
      </div>
      <div className="col">
        <ArticleHeader> NEWS </ArticleHeader>
      </div>
      <div className="col">
        AWKWARD
      </div>
      <div className="col">
        OPINION
      </div>
    </div>

    <MoreLink> More shenainigans this way </MoreLink>
  </Wrapper>
)

export default PicWithLine