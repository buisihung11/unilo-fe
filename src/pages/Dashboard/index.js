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
          <ExitButton onClick={() => router.push('/mission')} />
          <LeaderboardButton onClick={() => router.push('/leaderboard')} />
          <MinigameButton onClick={() => router.push('/minigame')} />
          <RewardButton onClick={() => router.push('/promotion')} />
          <SettingButton onClick={() => router.push('/account')} />
        </div>
        <BearTalking />
      </StyledUnilo>
    </StyledUniloWrapper>
  )
}
