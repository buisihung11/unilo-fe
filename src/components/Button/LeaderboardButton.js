import React from 'react'
import leaderboardIcon from '../../assets/icons/leaderboard-icon.png'
import { StyledBackgroundButton } from './Button.style'

export default function LeaderboardButton(props) {
  return <StyledBackgroundButton {...props} image={leaderboardIcon} />
}
