import React from 'react'
import { StyledUniloWrapper, OverlayView } from '../../components/AppStyles'
import { Header, SimpleTable, Button, DashedLine } from '../../components'
import honeypot1 from '../../assets/icons/honeypot1.png'
import honeypot2 from '../../assets/icons/honeypot2.png'
import honeypot3 from '../../assets/icons/honeypot3.png'
import mascot from '../../assets/icons/bear-3.png'

const badges = [
  { img: honeypot1, name: 'hũ mật ong thường' },
  { img: honeypot2, name: 'hũ mật ong cao cấp' },
  { img: honeypot3, name: 'hũ mật ong thượng hạng' },
]

export default function Reward(props) {
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header style={{ flex: 1 }} />
        <SimpleTable style={{ flex: 5 }} title="Phần thưởng" mascot={mascot}>
          <div style={{ width: '100%' }}>
            <h2>Chúc mừng</h2>
            <DashedLine />
            <p>Bạn đã nhận được 01 phần quà</p>
          </div>
          <div>
            <img src={badges[props.type].img} width="50%" />
            <h4 style={{ marginTop: '1em' }} className="stroked-text">
              {props.quantity || '03'} {badges[props.type].name}
            </h4>
          </div>
          <div style={{ width: '100%' }}>
            <DashedLine />
            <p>Bạn có muốn tiếp tục?</p>
          </div>
        </SimpleTable>
        <Button variant="primary">
          <h4>Tiếp tục</h4>
        </Button>
      </OverlayView>
    </StyledUniloWrapper>
  )
}
