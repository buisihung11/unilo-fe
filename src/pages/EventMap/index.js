import React, { useState, useEffect, useCallback } from 'react'
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet'
import rewardSfx from '../../assets/sounds/reward.wav'
import badLuckSfx from '../../assets/sounds/bad-luck.wav'
import L from 'leaflet'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import {
  Box,
  Dialog,
  Icon,
  SimpleTable,
  OverlayView,
  Button,
  ExpandableItem,
  DashedLine,
} from '../../components'

import mascot from '../../assets/images/reward-bear.png'
import winIcon from '../../assets/icons/honeypot1.png'
import loseIcon from '../../assets/images/welcome-bear.png'
import {
  StyledUniloBackground,
  StyledUniloWrapper,
} from '../../components/AppStyles'
import Layout from '../../components/Layout'
// IMAGES
import event1 from '../../assets/icons/bear-2.png'
// import event2 from '../../assets/icons/event-2.svg'
import backIcon from '../../assets/icons/back.png'
import { useQuery } from 'react-query'
import axios from 'axios'
import Text from '../../components/Text'
import { Input } from '../Login/Login.style'
import useSound from 'use-sound'
import useSetting from '../../hooks/useSetting'

const MapStyledContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`

const IconStores = new L.Icon({
  iconSize: [36, 48],
  popupAnchor: [-3, -56],
  iconAnchor: [22, 56],
  iconUrl: event1,
})

const getEventLocations = () => {
  const jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImYxM2FlZGY4LTIwM2MtNGZmNi1iMzJjLTgzY2FkOWE4NjMyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQUNCIEJBTksiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhY2IiLCJGY21Ub2tlbiI6IiIsIkltYWdlVXJsIjoiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiIxMjMxMjMiLCJCcmFuZElkIjoiMjk4IiwiQnJhbmROYW1lIjoiQUNCIiwiQWN0aXZlIjoiVHJ1ZSIsImV4cCI6MTYzNjY3NTIwMCwiaXNzIjoiVFJBREVaT05FTUFQIiwiYXVkIjoiVFJBREVaT05FTUFQIn0.tTwPEGJTpkk8KR6eiwo0BLyyLDLvraA_5BMp58iN_vk'
  return axios
    .get(`https://stg-api.tradezonemap.com/api/v1.0/stores/brand`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => res.data)
}

const DEFAULT_DESC = [
  {
    key: 'Ti??u ?????',
    value: 'L??n r???ng, xu???ng bi???n',
  },
  {
    key: 'Ph???n th?????ng',
    value: '10 h???t d???',
  },
  {
    key: 'M?? t???',
    value:
      'H???p t??c c??ng T??? ch???c Change, ACB t??? ch???c m???t l???p h???c ?????y ?? ngh??a mang t??n L??n r???ng, xu???ng bi???n. Qua l???p h???c m??i tr?????ng n??y, ACB mu???n g???i g???m th??ng ??i???p c??ng chung tay b???o v??? m??i tr?????ng ?????n m???i ng?????i',
  },
  {
    key: 'H?????ng d???n',
    value: `B1: ?????n l???p h???c t???i s??? 123 Abc Q1 HCM
  B2: Tham gia l???p h???c
  B3: Sau khi k???t th??c bu???i h???c, ban t??? ch???c s??? cung c???p cho b???n m?? QR x??c nh???n ???? tham gia
  B4: M??? app ACB Mobile Banking
  B5: Qu??t m?? QR v?? nh???n th?????ng
  `,
  },
  { key: '??i???u ki???n tham gia', value: 'T???t c??? m???i ng?????i' },
]

const EventACBMapPage = () => {
  const history = useHistory()

  const { mute } = useSetting()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [guessGame, setGuessGame] = useState(null)
  const [playGame, setPlayGame] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [gameStatus, setGameStatus] = useState(null)
  const [counter, setCounter] = useState(30)
  const data = [
    {
      id: 12528,
      name: 'ACB Quan 1',
      wkt: 'POINT (106.700751 10.782349)',
      createDate: '2021-10-21T14:42:17.717',
      brandId: 298,
      address:
        'ACB, L?? V??n H??u, Ph?????ng B???n Ngh??, Qu???n 1, Th??nh ph??? H??? Ch?? Minh, 70206, Vi???t Nam',
      brandName: 'ACB',
      type: 'Kids/baby stores',
      status: 1,
      storeStreetSegments: [],
      imageUrl:
        'https://www.acb.com.vn/wps/wcm/connect/f6798828-b0d3-4061-8581-f7ee2b9c1d68/logo-acb.png?MOD=AJPERES&CACHEID=f6798828-b0d3-4061-8581-f7ee2b9c1d68',
      geom: {
        type: 'Point',
        coordinates: [106.700751, 10.782349],
      },
      storeCode: 'ACBQ1',
      storeTypeId: 5,
      storeTypeName: 'Chung c??',
    },
    {
      id: 12529,
      name: 'ACB Quan 3',
      wkt: 'POINT (106.6848832 10.7689731)',
      createDate: '2021-10-21T14:43:51.557',
      brandId: 298,
      address:
        'ACB, Nguy???n Th??? Minh Khai, Ph?????ng 5, Qu???n 3, Th??nh ph??? H??? Ch?? Minh, 70200, Vi???t Nam',
      brandName: 'ACB',
      type: 'Kids/baby stores',
      status: 1,
      storeStreetSegments: [],
      imageUrl:
        'https://www.acb.com.vn/wps/wcm/connect/f6798828-b0d3-4061-8581-f7ee2b9c1d68/logo-acb.png?MOD=AJPERES&CACHEID=f6798828-b0d3-4061-8581-f7ee2b9c1d68',
      geom: {
        type: 'Point',
        coordinates: [106.6848832, 10.7689731],
      },
      storeCode: 'ACBQUAN3',
      storeTypeId: 5,
      storeTypeName: 'Chung c??',
    },
  ]
  const [rewardSound] = useSound(rewardSfx, {
    soundEnabled: !mute,
  })
  const [badLuckSound] = useSound(badLuckSfx, {
    soundEnabled: !mute,
  })

  console.log(`data`, data)

  const checkGame = useCallback(() => {
    setPlayGame(false)
    if (answer?.toLowerCase() == 'acbwin') {
      setGameStatus('WIN')
      rewardSound()
    } else {
      setGameStatus('LOSE')
      badLuckSound()
    }
    setAnswer(null)
    setCounter(30)
  }, [answer, badLuckSound, rewardSound])

  useEffect(() => {
    let interval
    if (playGame) {
      interval = setInterval(() => {
        setCounter(counter - 1)
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [playGame, counter])

  useEffect(() => {
    let timeout
    if (playGame) {
      timeout = setTimeout(() => {
        checkGame()
      }, 1000 * 30)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [playGame, checkGame])

  const {
    name,
    descriptions = DEFAULT_DESC,
    startDate,
    expirationDate,
  } = selectedEvent || {}

  const content = descriptions.map(({ key, value }, i) => (
    <ExpandableItem key={key} label={key} isShown={i === 0}>
      {value}
    </ExpandableItem>
  ))

  const badLuck = gameStatus === 'LOSE'

  return (
    <StyledUniloWrapper>
      <Dialog
        visible={Boolean(gameStatus)}
        headerTitle={
          <Text fontWeight="bold" color="white">
            Ph???n th?????ng
          </Text>
        }
        extraHeader={
          <Box pr={4} as="img" src={mascot} width={140} height="auto" />
        }
        footer={
          <Button onClick={() => setGameStatus(null)} variant="primary">
            <h4>Quay l???i</h4>
          </Button>
        }
      >
        <Box textAlign="center">
          <div style={{ width: '100%' }}>
            <h2>{badLuck ? 'Ti???c qu?? ' : 'Ch??c m???ng'}</h2>
            <DashedLine />
            {!badLuck ? (
              <p>B???n ???? nh???n ???????c 01 ph???n qu??</p>
            ) : (
              <p>B???n ???? ??o??n sai r???i</p>
            )}
            <Box
              py={4}
              as="img"
              src={badLuck ? loseIcon : winIcon}
              width={75}
              height="auto"
            />
            {!badLuck && (
              <Box style={{ 'overflow-wrap': 'break-word' }}>
                <Text color="white" fontSize="2rem">
                  3 h?? m???t ong cao c???p
                </Text>
              </Box>
            )}
          </div>
        </Box>
      </Dialog>

      {selectedEvent && (
        <Dialog
          visible={Boolean(selectedEvent)}
          onClose={() => setSelectedEvent(null)}
          headerTitle="L??n r???ng xu???ng bi???n"
          footer={
            <Button onClick={() => history.push('/qr-scan')}>Th???c hi???n</Button>
          }
        >
          <div style={{ width: '100%' }}>
            <h4>{name || 'Mission Name'}</h4>
            <p>
              <small>
                ({startDate || 'dd/mm/yyyy'} - {expirationDate || 'dd/mm/yyyy'})
              </small>
            </p>
            {content}
          </div>
        </Dialog>
      )}

      {guessGame && (
        <Dialog
          visible={Boolean(guessGame)}
          onClose={() => setGuessGame(false)}
          headerTitle="??o??n vui c?? th?????ng"
          footer={
            <Button
              onClick={() => {
                setGuessGame(false)
                setPlayGame(true)
              }}
            >
              Ch??i ngay
            </Button>
          }
        >
          <div style={{ width: '100%' }}>
            <h4>Tr?? ch??i</h4>
            <p>??o??n ????ng ?? ch??? trong v??ng 30s ????? nh???n ???????c ph???n th?????ng nh??</p>
          </div>
        </Dialog>
      )}

      {playGame && (
        <Dialog
          visible={Boolean(playGame)}
          onClose={() => setPlayGame(false)}
          headerTitle={
            <Text sx={{ fontWeight: 'bold', color: 'white' }}>????? b???n</Text>
          }
          footer={
            <Box textAlign="center">
              <Input
                style={{ width: '50%' }}
                placeholder="????p ??n c???a b???n"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <Button mt="1rem" onClick={checkGame}>
                X??c nh???n
              </Button>
            </Box>
          }
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h5>H??y gh??p c??c ch??? sau th??nh t??? c?? ngh??a:</h5>
            <p>??o??n ????ng ?? ch??? trong v??ng 30s ????? nh???n ???????c ph???n th?????ng nh??</p>
            <h4>{counter}</h4>
            <h3 style={{ marginTop: '2rem' }}>A / W / n / C / i / B</h3>
          </div>
        </Dialog>
      )}

      <StyledUniloBackground />

      <Layout
        Header={
          <Box p={2} display="flex">
            <Icon img={backIcon} onClick={() => history.replace('/')} />
          </Box>
        }
        Content={
          <Box textAlign="center" height="100%">
            <Box>
              <Text fontSize="2rem" fontWeight="bold" py={2}>
                C??ng Sullie b??ng qua bao ?????i d????ng
              </Text>
            </Box>
            <Box p={2} width="100%" height="100%">
              <MapStyledContainer
                center={{ lat: 10.772461, lng: 106.698055 }}
                zoom={12}
                scrollWheelZoom={true}
                zoomDelta={3}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                />
                {data?.map((e, idx) => (
                  <Marker
                    key={e.id}
                    position={{
                      lat: Number(e.geom.coordinates[1]),
                      lng: Number(e.geom.coordinates[0]),
                    }}
                    icon={IconStores}
                    eventHandlers={{
                      click: () => {
                        if (idx === 0) {
                          setSelectedEvent(e)
                        } else {
                          setGuessGame(true)
                        }
                      },
                    }}
                  >
                    <Popup>{e.name}</Popup>
                  </Marker>
                ))}
              </MapStyledContainer>
            </Box>
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}

export default EventACBMapPage
