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
import useMissions from '../../hooks/mission/useMissions'

export default function Mission(props) {
  const { data: missions } = useMissions()

  const history = useHistory()

  const content = missions?.map((mission) => (
    <MissionItem key={mission.id}>
      <MissionItemName># {mission.name}</MissionItemName>
      <Button
        style={{ flex: 1 }}
        variant="success"
        onClick={() => history.push(`/mission/${mission.id}`, mission)}
      >
        <small>Xem</small>
      </Button>
    </MissionItem>
  ))

  const goToEventMapHandler = () => {
    history.push({
      pathname: `/event-map`,
    })
  }

  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header style={{ flex: 1 }} />
        <TabTable style={{ flex: 5 }} title1="Nhiệm vụ">
          {content}
        </TabTable>
        <Button
          style={{
            width: '40%',
            margin: '0 auto',
            marginTop: '-6.5rem',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            zIndex: 10,
          }}
          onClick={() => goToEventMapHandler()}
          variant={'primary'}
        >
          Xem bản đồ
        </Button>
        <Mascot image={mascot} />
      </OverlayView>
    </StyledUniloWrapper>
  )
}
