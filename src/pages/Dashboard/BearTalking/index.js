import React, { useState } from 'react'
import {
  StyledBear,
  StyledBearWrapper,
  ButtonWrapper,
} from './BearTalking.style'
import Message from '../Message'
import Button from '../../../components/Button'

export default function BearTalking(props) {
  return (
    <StyledBearWrapper onClick={props.getAction}>
      <StyledBear />
      <Message />
      <ButtonWrapper>
        <Button variant={'danger'} onClick={props.getAction}>
          X
        </Button>
      </ButtonWrapper>
    </StyledBearWrapper>
  )
}
