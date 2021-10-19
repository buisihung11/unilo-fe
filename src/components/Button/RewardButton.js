import React from 'react'
import rewardIcon from '../../assets/icons/reward-icon.png'
import { StyledBackgroundButton } from './Button.style'

export default function RewardButton(props) {
  return <StyledBackgroundButton image={rewardIcon} {...props} />
}
