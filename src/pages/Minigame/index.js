import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { StyledUniloWrapper, OverlayView } from '../../components/AppStyles'
import { Header, SimpleTable, Button, DashedLine } from '../../components'
import mascot from '../../assets/icons/bear-2.png'
import boxIcon from '../../assets/images/giftbox/box_1.png'
import wheelIcon from '../../assets/icons/wheel.png'

const games = [
  {
    icon: boxIcon,
    name: 'Hộp quà bí mật',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    path: '/minigame/openbox',
  },
  {
    icon: wheelIcon,
    name: 'Vòng quay may mắn',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    path: '/minigame/wheel',
  },
]

const MoveButton = styled.div({
  flex: 1,
})

const ContentWrapper = styled.div({
  display: 'flex',
  flex: 5,
  alignItems: 'center',
  justifyContent: 'center',
})

export default function Minigame(props) {
  const [gameIndex, setGameIndex] = useState(0)
  const history = useHistory()
  const { icon, name, description, path } = games[gameIndex]
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header style={{ flex: 1 }} />
        <SimpleTable style={{ flex: 5 }} title="Minigame" mascot={mascot}>
          <MoveButton
            onClick={() =>
              setGameIndex((gameIndex + games.length - 1) % games.length)
            }
          >
            <i className="fas fa-angle-up"></i>
            <DashedLine />
          </MoveButton>
          <ContentWrapper>
            <div>
              <img src={icon} width="50%" style={{ marginBottom: '2em' }} />
              <h3>{name}</h3>
              <small>{description}</small>
            </div>
          </ContentWrapper>
          <MoveButton
            onClick={() =>
              setGameIndex((gameIndex + games.length + 1) % games.length)
            }
          >
            <DashedLine />
            <i className="fas fa-angle-down"></i>
          </MoveButton>
        </SimpleTable>
        <Button variant="primary" onClick={() => history.push(path)}>
          <h4>Chơi ngay</h4>
        </Button>
      </OverlayView>
    </StyledUniloWrapper>
  )
}
