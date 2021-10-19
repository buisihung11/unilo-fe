import React from 'react'
import minigameIcon from '../../assets/icons/minigame-icon.png'
import { StyledBackgroundButton } from './Button.style'

export default function MinigameButton(props) {
  return <StyledBackgroundButton image={minigameIcon} {...props} />
}
