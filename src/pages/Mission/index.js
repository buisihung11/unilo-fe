import React from 'react'
import { useHistory } from 'react-router'
import {
  StyledUniloWrapper,
  OverlayView,
  Header,
  TabTable,
  Button,
  Box,
} from '../../components'
import { MissionItem, MissionItemName, Mascot } from './components'
import mascot from '../../assets/icons/bear-4.png'

export default function Mission(props) {
  const history = useHistory()
  let { missions } = props
  missions = [
    { id: 0, name: 'Đăng bài facebook hashtag #acb' },
    { id: 2, name: 'Chạy bộ 4000 bước' },
    { id: 3, name: 'Sử dụng thẻ Visa ACB để thanh toán' },
    { id: 4, name: 'Chạy bộ 7 ngày liên tục' },
    { id: 5, name: 'Đăng nhập 10 ngày liên tục' },
    { id: 6, name: 'Gửi link giới thiệu' },
  ]
  const content = missions.map(({ id, name }) => (
    <MissionItem key={id}>
      <MissionItemName># {name}</MissionItemName>
      <Button
        style={{ flex: 1 }}
        variant="success"
        onClick={() => history.push('/mission/123')}
      >
        <small>Xem</small>
      </Button>
    </MissionItem>
  ))
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header style={{ flex: 1 }} />
        <TabTable style={{ flex: 5 }} title1="Nhiệm vụ">
          {content}
        </TabTable>
        <Mascot image={mascot} />
      </OverlayView>
    </StyledUniloWrapper>
  )
}
