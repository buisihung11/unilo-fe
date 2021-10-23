import React, { useState } from 'react'
import { StyledNut, StyledNutLabel } from './NutLabel.style'
import Box from '../Box'

export default function NutLabel({ count = 0 }) {
  return (
    <StyledNutLabel>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <div>{count}</div>
        <StyledNut nutSize={'20px'} />
      </Box>
    </StyledNutLabel>
  )
}
