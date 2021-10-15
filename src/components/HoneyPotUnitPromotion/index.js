import React from 'react'
import { StyledBackgroundButton } from '../Button/Button.style'
import { StyledHoneyPotCount } from './HoneyPot.style'
import { StyledHoneyPotCard } from './HoneyPot.style'

export default function HoneyPot(props) {
  return (
    <StyledHoneyPotCard>
      <StyledHoneyPotCount size={props.size}>{props.count}</StyledHoneyPotCount>
      <StyledBackgroundButton
        image={props.image}
        width={props.imageSize}
        style={{ marginTop: '-1.5rem' }}
      />
    </StyledHoneyPotCard>
  )
}
