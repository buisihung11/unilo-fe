import React from 'react'
import { useHistory } from 'react-router'
import {
  StyledUniloWrapper,
  OverlayView,
  Header,
  TabTable,
  Button,
} from '../../components'
import { MissionItem, MissionItemName, Mascot } from './components'
import mascot from '../../assets/icons/bear-4.png'

export default function Mission(props) {
  const history = useHistory()
  let { missions } = props
  missions = [
    { id: 0, name: 'Nhiệm vụ 1' },
    { id: 2, name: 'Nhiệm vụ 2' },
    { id: 3, name: 'Nhiệm vụ 3' },
    { id: 4, name: 'Nhiệm vụ 4' },
    { id: 5, name: 'Nhiệm vụ 5' },
    { id: 6, name: 'Nhiệm vụ 6' },
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
