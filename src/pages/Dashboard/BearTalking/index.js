import React from 'react'
import { StyledBear, StyledBearWrapper } from './BearTalking.style'
import Message from '../Message'

export default function BearTalking() {
  return <StyledBearWrapper>
    <StyledBear />
    <Message />
  </StyledBearWrapper>
}