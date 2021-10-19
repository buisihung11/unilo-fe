import React from 'react'
import { OverlayView, StyledUniloWrapper } from '../../components/AppStyles'
import { CustomerSummary, TierBox } from '../../components'
import { HeaderWrapper, Title } from './components/Account.style'
import ExitButton from './components/ExitButton'
import { TabTable } from '../../components'
import { Link } from 'react-router-dom'
function Account() {
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <HeaderWrapper>
          <Link to="/Dashboard">
            <ExitButton />
          </Link>
          <Title>Tài khoản</Title>
        </HeaderWrapper>
        <CustomerSummary />
        <TierBox />
        <TabTable title1={'Lịch sử tích điểm'} title2={'Lịch sử ưu đãi'} />
      </OverlayView>
    </StyledUniloWrapper>
  )
}

export default Account
