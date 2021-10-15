import React, { useState } from 'react'
import { StyledBearTaking, StyledMessage, StyledMessageText } from './BearTaking.style'

export default function BearTalking() {
  const [message, setMessage] = useState(
    'Subie xin chào buổi sáng! Chúc Nguyên có một buổi sáng an lành nhé!',
  )
  return (
    <div className={'d-flex justify-content-center'}>
      <StyledBearTaking>
        <StyledMessage>
          <StyledMessageText>{message}</StyledMessageText>
        </StyledMessage>
      </StyledBearTaking>
    </div>
  )
}
