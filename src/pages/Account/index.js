import React, { useState } from 'react'
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

const earnedPointHistory = [
  {
    id: 0,
    name: 'Giao dịch thanh toán hóa đơn 1234565',
    date: 'dd/MM/yyyy - hh:ss:mm',
    point: 5,
  },
  {
    id: 1,
    name: 'Giao dịch thanh toán hóa đơn 1234565',
    date: 'dd/MM/yyyy - hh:ss:mm',
    point: 5,
  },
  {
    id: 2,
    name: 'Giao dịch thanh toán hóa đơn 1234565',
    date: 'dd/MM/yyyy - hh:ss:mm',
    point: 10,
  },
]

const redeemedPointHistory = [
  {
    id: 0,
    name: 'Giao dịch thanh toán hóa đơn 1234565',
    date: 'dd/MM/yyyy - hh:ss:mm',
    point: 5,
  },
  {
    id: 1,
    name: 'Giao dịch thanh toán hóa đơn 1234565',
    date: 'dd/MM/yyyy - hh:ss:mm',
    point: 5,
  },
  {
    id: 2,
    name: 'Giao dịch thanh toán hóa đơn 1234565',
    date: 'dd/MM/yyyy - hh:ss:mm',
    point: 10,
  },
]

function Account() {
  const [shownIndex, setShownIndex] = useState(1)
  const content = shownIndex ? earnedPointHistory : redeemedPointHistory
  const tblContent = content.map(({ id, name, date, point }, index) => (
    <HistoryItem key={id}>
      <HistoryItemLeftWrapper style={{ flex: 4 }}>
        <div>
          <HistoryItemName>
            #{index + 1} {name}
          </HistoryItemName>
          <HistoryItemDate>{date}</HistoryItemDate>
        </div>
      </HistoryItemLeftWrapper>
      <Button style={{ flex: 1 }} variant={shownIndex ? 'success' : 'danger'}>
        <b>
          {shownIndex ? '+' : '-'}
          {point}
        </b>
        <Icon img={nutIcon} style={{ width: '1.5em' }} />
      </Button>
    </HistoryItem>
  ))
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
