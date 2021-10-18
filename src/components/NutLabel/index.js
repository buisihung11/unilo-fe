import React, { useState } from 'react'
import { StyledNut, StyledNutLabel } from './NutLabel.style'
import Box from '../Box'

export default function NutLabel(props) {
  const [currentNutCount, setCurrentNutCount] = useState(150)
  return (
    <StyledNutLabel>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <div>{currentNutCount}</div>
        <StyledNut nutSize={'20px'} />
      </Box>
    </StyledNutLabel>
  )
}
