import React from 'react'
import styled, { keyframes } from 'styled-components'
import cowsay from 'cowsay-browser'
import Head from 'next/head'
import { flash, flip, hinge, rubberBand, swing, wobble } from 'react-animations'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'

const Root = styled.div`
  text-align: center;
`

const LogoSection = styled.section`
  background-color: ${props => props.bg ? props.bg : 'purple'};
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

const SOCIAL_ICON_SIZE = 128
const TWITTER_URL = 'https://twitter.com/benivoncheni'
const TWITTER_TITLE = 'Beni von Cheni @ Twitter ~ 🤠'
const LINKEDIN_URL = 'https://www.linkedin.com/in/benicheni/'
const LINKEDIN_TITLE = 'Ben Chen @ LinkedIn ~ 🏢'
const TUMBLR_URL = 'http://benicheni.tumblr.com/'
const TUMBLR_TITLE = 'benicheni photography @ tumblr ~ 📸'
const FACEBOOK_URL = 'https://www.facebook.com/BeniLCheni'
const FACEBOOK_TITLE = 'Beni von Cheni @ Facebook 🌋'

export default () => [
  <Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>,
  <Root>
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
    <LogoSection bg='black'>
      <TwitterShareButton
        url={TWITTER_URL}
        title={TWITTER_TITLE}
      >
        <TwitterIcon
          size={SOCIAL_ICON_SIZE}
          round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={LINKEDIN_URL}
        title={LINKEDIN_TITLE}
      >
        <LinkedinIcon
          size={SOCIAL_ICON_SIZE}
          round />
      </LinkedinShareButton>
      <TumblrShareButton
        url={TUMBLR_URL}
        title={TUMBLR_TITLE}
      >
        <TumblrIcon
          size={SOCIAL_ICON_SIZE}
          round />
      </TumblrShareButton>
      <FacebookShareButton
        url={FACEBOOK_URL}
        quote={FACEBOOK_TITLE}
      >
        <FacebookIcon
          size={SOCIAL_ICON_SIZE}
          round />
      </FacebookShareButton>
    </LogoSection>
  </Root>
]
