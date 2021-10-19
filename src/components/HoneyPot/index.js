import React from 'react'
import { StyledBackgroundButton } from '../Button/Button.style'
import { StyledHoneyPotCount } from './HoneyPot.style'
import Box from '../Box'

export default function HoneyPot(props) {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} m={".5rem"}>
      <StyledBackgroundButton
        image={props.image}
        width={'2rem'}
        style={{ marginTop: '-1.5rem' }}
      />
      <StyledHoneyPotCount>{props.count}</StyledHoneyPotCount>
    </Box>
  )
}
