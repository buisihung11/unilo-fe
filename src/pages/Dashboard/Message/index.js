import React, { useState } from 'react'
import { StyledMessage, StyledMessageText, CloseButton } from './Message.style'

export default function Message() {
  const [message, setMessage] = useState('Subie xin chào buổi chiều!')
  const [isClosed, setIsClosed] = useState(false)
  if (isClosed) {
    return ''
  }
  return (
    <StyledMessage>
      <CloseButton
        className="far fas fa-times"
        onClick={() => setIsClosed(!isClosed)}
      />
      <StyledMessageText>{message}</StyledMessageText>
    </StyledMessage>
  )
}
