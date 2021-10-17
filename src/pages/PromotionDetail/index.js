import React from 'react'
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
  let {
    name,
    descriptions,
    bannerImg,
    startDate,
    expirationDate,
    exchangedValue,
    exchangedType,
    partnerName,
  } = props
  descriptions = [
    {
      key: 'Mô tả',
      value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    { key: 'Điều kiện áp dụng', value: undefined },
  ]
  const content = descriptions.map(({ key, value }, i) => (
    <ExpandableItem label={key} isShown={i === 0}>
      {value}
    </ExpandableItem>
  ))
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header style={{ flex: 1 }} onClick={() => console.log('back')} />
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