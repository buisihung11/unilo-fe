import React, { useState } from 'react'
import useSound from 'use-sound'
import { Box, CustomerSummary } from '../../components'
import {
  Overlay,
  StyledUniloBackground,
  StyledUniloWrapper,
} from '../../components/AppStyles'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Wheel from '../../components/Wheel'
import clickSfx from '../../assets/sounds/button-click.wav'
import useSetting from '../../hooks/useSetting'
import backIcon from '../../assets/icons/back.png'
import { useHistory } from 'react-router'
import Icon from '../../components/Icon'

const WheelGamePage = () => {
  const history = useHistory()
  const { mute } = useSetting()
  const [rotate, setRotate] = useState(false)
  const [prize, setPrize] = useState(null)
  const [clickSound] = useSound(clickSfx, {
    soundEnabled: !mute,
  })

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Overlay />
      <Layout
        Header={
          <Box p={2} display="flex">
            <Icon img={backIcon} onClick={() => history.replace('/')} />
          </Box>
        }
        Content={
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            zIndex="90"
            p={2}
            position="relative"
            overflow="hidden"
          >
            <Text as="h1" fontSize="2rem" color="#fff" pb={2}>
              Vòng quay may mắn
            </Text>
            <Wheel
              onClick={() => {
                clickSound()
                setRotate(true)
              }}
              onWinner={setPrize}
              isRotate={rotate}
              width="100%"
              height="auto"
              aspectRatio={'1/1'}
              style={{ cursor: 'pointer' }}
            />
            <Text fontSize="3rem">{prize}</Text>
          </Box>
        }
        Footer={<CustomerSummary />}
      />
    </StyledUniloWrapper>
  )
}

export default WheelGamePage
