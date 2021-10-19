import React from 'react'
import { StyledUnilo, StyledUniloWrapper } from '../../components/AppStyles'
import {
  Box,
  CustomerSummary,
  ExitButton,
  LeaderboardButton,
  MinigameButton,
  RewardButton,
  SettingButton,
  TierBox,
} from '../../components'
import BearTalking from './BearTalking'
import { StyledMessage } from './Message/Message.style'
import Message from './Message'
import { useHistory } from 'react-router'

export default function Dashboard(props) {
  const router = useHistory()

  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <Box mt={'-2rem'}>
          <CustomerSummary />
        </Box>
        <TierBox />
        <div className={'container d-flex justify-content-center fixed-bottom'}>
          <ExitButton />
          <LeaderboardButton onClick={() => router.push('/leaderboard')} />
          <MinigameButton onClick={() => router.push('/minigame/wheel')} />
          <RewardButton />
          <SettingButton />
        </div>
        <BearTalking />
      </StyledUnilo>
    </StyledUniloWrapper>
  )
}
