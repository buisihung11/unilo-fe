import React from 'react'
import { StyledBackgroundButton } from '../../../../components/Button/Button.style'
import { StyledHoneyPotCount } from './HoneyPot.style'
import { StyledHoneyPotCard } from './HoneyPot.style'

export default function HoneyPot(props) {
  return (
    <StyledHoneyPotCard>
      <StyledBackgroundButton
        image={props.image}
        width={'1.2rem'}
        style={{ marginTop: '-1.3rem' }}
      />
      <StyledHoneyPotCount>{props.count}</StyledHoneyPotCount>
    </StyledHoneyPotCard>
  )
}
