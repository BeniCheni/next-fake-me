import React from 'react'
import styled, { keyframes } from 'styled-components'
import cowsay from 'cowsay-browser'
import Head from 'next/head'
import Link from 'next/link'
import { flash, flip, hinge, rubberBand, swing, wobble } from 'react-animations'

const Root = styled.div`
  text-align: center;
`

const LogoSection = styled.section`
  background-color: ${props => (props.bg ? props.bg : 'purple')};
  height: 150px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const keyFramesFlash = keyframes`${flash}`
const keyFramesFlip = keyframes`${flip}`
const keyFramesHinge = keyframes`${hinge}`
const keyFramesRubberBand = keyframes`${rubberBand}`
const keyFramesSwing = keyframes`${swing}`
const keyFramesWobble = keyframes`${wobble}`

const LogoFlash = styled.img`
  animation: ${keyFramesFlash} infinite 3s linear;
  height: 80px;
`

const LogoFlip = styled.img`
  animation: ${keyFramesFlip} infinite 3s linear;
  height: 80px;
`

const LogoHinge = styled.img`
  animation: ${keyFramesHinge} infinite 3s linear;
  height: 80px;
`

const LogoRubberBand = styled.img`
  animation: ${keyFramesRubberBand} infinite 3s linear;
  height: 80px;
`

const LogoSwing = styled.img`
  animation: ${keyFramesSwing} infinite 3s linear;
  height: 80px;
`

const LogoWobble = styled.img`
  animation: ${keyFramesWobble} infinite 3s linear;
  height: 80px;
`

const CowsayPre = styled.pre`
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`

export default () => (
  <React.Fragment>
    <Head key='key'>
      <title>Space of Beni von Cheni</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Root key='root'>
      <LogoSection>
        <LogoHinge src='/static/react.svg' alt='logo' />
        <LogoFlip src='/static/react.svg' alt='logo' />
        <LogoFlash src='/static/react.svg' alt='logo' />
        <LogoRubberBand src='/static/react.svg' alt='logo' />
        <LogoSwing src='/static/react.svg' alt='logo' />
        <LogoWobble src='/static/react.svg' alt='logo' />
      </LogoSection>
      <CowsayPre>
        {cowsay.say({
          text:
            'Passion & wrath are "thinly" divided, often' +
            ' misunderstood. Though unapologetic once committed. JavaScript' +
            ' expressionist. Leisure oil painter.'
        })}
      </CowsayPre>
      <Title>Beni von Cheni is a void</Title>
      <Link href='/calculator-playground'>
        <button>Play with Calculator</button>
      </Link>
    </Root>
  </React.Fragment>
)
