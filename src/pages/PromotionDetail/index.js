import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  StyledUniloWrapper,
  OverlayView,
  Header,
  SimpleTable,
  Button,
  ExpandableItem,
  Icon,
} from '../../components'
import Banner from './components/Banner'
import honeypot1 from '../../assets/icons/honeypot1.png'

export default function PromotionDetail(props) {
  let history = useHistory()
  let {
    name,
    description,
    applyRule,
    bannerImg,
    startDate,
    expirationDate,
    exchangedValue,
    exchangedType,
    partnerName,
  } = history.location.state

  const descriptions = [
    {
      key: 'Mô tả',
      value: description,
    },
    { key: 'Điều kiện áp dụng', value: applyRule },
  ]
  const content = descriptions.map(({ key, value }, i) => (
    <ExpandableItem key={key} label={key} isShown={i === 0}>
      {value}
    </ExpandableItem>
  ))
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header style={{ flex: 1 }} />
        <SimpleTable style={{ flex: 5 }} title="Chi tiết">
          <div style={{ width: '100%' }}>
            <Banner img={bannerImg} subtitle={partnerName || 'Partner Name'} />
            <h4>{name || 'Voucher Name'}</h4>
            <p>
              <small>
                ({startDate || 'dd/mm/yyyy'} - {expirationDate || 'dd/mm/yyyy'})
              </small>
            </p>
            {content}
          </div>
        </SimpleTable>
        <Button variant="primary">
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <h2 style={{ margin: '0 .5em 0 0' }}>{exchangedValue || 3}</h2>
            <Icon img={exchangedType || honeypot1} style={{ height: '80%' }} />
          </div>
        </Button>
      </OverlayView>
    </StyledUniloWrapper>
  )
}
