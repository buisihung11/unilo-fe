import React from 'react'
import { StyledBackgroundButton } from './Button.style'
import exitIcon from '../../assets/icons/exit-icon.png'

export default function ExitButton(props) {
  return <StyledBackgroundButton image={exitIcon} {...props} />
}
