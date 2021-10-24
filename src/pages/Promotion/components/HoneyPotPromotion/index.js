import React from 'react'
import { StyledBackgroundButton } from '../../../../components/Button/Button.style'
import { StyledHoneyPotCount, StyledHoneyPotCard } from './HoneyPot.style'

export default function HoneyPot(props) {
  return (
    <StyledHoneyPotCard>
      <StyledBackgroundButton
        image={props.image}
        width={'1.5rem'}
        style={{ marginTop: '-1.3rem' }}
      />
      <StyledHoneyPotCount>{props.count}</StyledHoneyPotCount>
    </StyledHoneyPotCard>
  )
}
