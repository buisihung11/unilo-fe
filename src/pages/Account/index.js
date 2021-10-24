import React, { useState } from 'react'
import useTransactions from '../../hooks/user/useTransactions'
import {
  StyledUniloWrapper,
  OverlayView,
  Header,
  TabTable,
  Button,
  Icon,
} from '../../components'
import { CustomerSummary, TierBox } from '../../components'
import {
  HistoryItem,
  HistoryItemLeftWrapper,
  HistoryItemName,
  HistoryItemDate,
} from './components'
import nutIcon from '../../assets/icons/nut.png'
import badge1Icon from '../../assets/icons/honeypot1.png'
import badge2Icon from '../../assets/icons/honeypot2.png'
import badge3Icon from '../../assets/icons/honeypot3.png'

const iconMapper = {
  POINT: nutIcon,
  BADGE_1: badge1Icon,
  BADGE_2: badge2Icon,
  BADGE_3: badge3Icon,
}

function Account() {
  let { transactions } = useTransactions()
  const [shownIndex, setShownIndex] = useState(1)

  const earnedPointHistory = (transactions || [])
    .filter((trans) => trans.metadata?.actionType === 'POINT_ADDING')
    .map((trans) => {
      return {
        id: trans.id,
        name: trans.metadata.eventDescription,
        date: new Date(trans.createdAt),
        point: trans.metadata.amount,
        walletType: trans.metadata.walletType,
      }
    })

  const redeemedPointHistory = (transactions || [])
    .filter(
      (trans) => trans.metadata?.actionType === 'BADGE_TO_GIFT_REDEEMPTION'
    )
    .map((trans) => {
      return {
        id: trans.id,
        name: `Đổi ưu đãi "${trans.metadata.giftGroup.name}"`,
        date: new Date(trans.createdAt),
        point: trans.metadata.amount,
        walletType: trans.metadata.walletType,
      }
    })

  const content = shownIndex ? earnedPointHistory : redeemedPointHistory
  const tblContent = content.map(
    ({ id, name, date, point, walletType }, index) => (
      <HistoryItem key={id}>
        <HistoryItemLeftWrapper style={{ flex: 4 }}>
          <div>
            <HistoryItemName>
              #{index + 1} {name}
            </HistoryItemName>
            <HistoryItemDate>
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </HistoryItemDate>
          </div>
        </HistoryItemLeftWrapper>
        <Button style={{ flex: 1 }} variant={shownIndex ? 'success' : 'danger'}>
          <b>
            {shownIndex ? '+' : '-'}
            {point}
          </b>
          <Icon
            img={iconMapper[walletType]}
            style={{ width: '1.5em', marginLeft: '.2em' }}
          />
        </Button>
      </HistoryItem>
    )
  )
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header title="Tài khoản" />
        <CustomerSummary />
        <TierBox />
        <TabTable
          title1={'Lịch sử tích điểm'}
          clickHandler1={() => setShownIndex(0)}
          title2={'Lịch sử đổi ưu đãi'}
          clickHandler2={() => setShownIndex(1)}
        >
          {tblContent}
        </TabTable>
      </OverlayView>
    </StyledUniloWrapper>
  )
}

export default Account
