import React from 'react'
import { StyledUnilo, StyledUniloWrapper } from '../../components/AppStyles'
import {
  BearTalking,
  CustomerSummary,
  ExitButton,
  LeaderboardButton,
  MinigameButton,
  RewardButton,
  SettingButton,
  TierBox,
} from '../../components'

export default function Dashboard(props) {
  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <CustomerSummary />
        <TierBox />
        <div
          className={
            'container d-flex justify-content-center fixed-bottom'
          }
        >
          <ExitButton />
          <LeaderboardButton />
          <MinigameButton />
          <RewardButton />
          <SettingButton />
        </div>
        <BearTalking />
      </StyledUnilo>
    </StyledUniloWrapper>
  )
}
