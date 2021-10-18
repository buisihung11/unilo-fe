import styled from 'styled-components'

export const BannerWrapper = styled.div({
  margin: '0 5% 1em 5%',
  position: 'relative',
})

export const BannerImage = styled.img({
  width: '100%',
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
})

export const BannerSubtitle = styled.div({
  position: 'absolute',
  bottom: 0,
  right: 0,
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '10px 0 10px 0',
  padding: '.5em 1em',
  font: 'small-caption',
  fontFamily: 'Mali',
})
