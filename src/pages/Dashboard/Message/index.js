import React, { useEffect, useState } from 'react'
import { StyledMessage, StyledMessageText, CloseButton } from './Message.style'

export default function Message({ hasFeed }) {
  const [message, setMessage] = useState(
    hasFeed
      ? 'Subie xin chào buổi chiều!'
      : 'Gấu Subie cần bạn tiếp thêm năng lượng'
  )
  const [isClosed, setIsClosed] = useState(false)
  useEffect(() => {
    setIsClosed(false)
  }, [hasFeed])
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
