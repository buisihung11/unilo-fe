import React from 'react'
import { StyledBear, StyledBearWrapper } from './BearTalking.style'
import Message from '../Message'

export default function BearTalking({ hasFeed }) {
  return (
    <StyledBearWrapper>
      <StyledBear hasFeed={hasFeed} />
      <Message hasFeed={hasFeed} />
    </StyledBearWrapper>
  )
}
