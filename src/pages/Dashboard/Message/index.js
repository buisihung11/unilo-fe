import React, { useState } from 'react'
import { StyledMessage, StyledMessageText } from './Message.style'

export default function Message() {
  const [message, setMessage] = useState(
    'Subie xin chào buổi sáng!',
  )
  return (
    <StyledMessage>
      <StyledMessageText>{message}</StyledMessageText>
    </StyledMessage>
  )
}
