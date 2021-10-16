import React from 'react'
import { StyledBackgroundButton } from '../Button/Button.style'
import { StyledHoneyPotCount } from './HoneyPot.style'
import { StyledHoneyPotCard } from './HoneyPot.style'

export default function HoneyPot(props) {
  return (
    <StyledHoneyPotCard>
      <StyledBackgroundButton
        image={props.image}
        width={'2rem'}
        style={{ marginTop: '-1.5rem' }}
      />
      <StyledHoneyPotCount>{props.count}</StyledHoneyPotCount>
    </StyledHoneyPotCard>
  )
}
