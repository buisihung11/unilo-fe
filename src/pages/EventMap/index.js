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
    key: 'Tiêu đề',
    value: 'Lên rừng, xuống biển',
  },
  {
    key: 'Phần thưởng',
    value: '10 hạt dẻ',
  },
  {
    key: 'Mô tả',
    value:
      'Hợp tác cùng Tổ chức Change, ACB tổ chức một lớp học đầy ý nghĩa mang tên Lên rừng, xuống biển. Qua lớp học môi trường này, ACB muốn gửi gắm thông điệp cùng chung tay bảo vệ môi trường đến mọi người',
  },
  {
    key: 'Hướng dẫn',
    value: `B1: Đến lớp học tại số 123 Abc Q1 HCM
  B2: Tham gia lớp học
  B3: Sau khi kết thúc buổi học, ban tổ chức sẽ cung cấp cho bạn mã QR xác nhận đã tham gia
  B4: Mở app ACB Mobile Banking
  B5: Quét mã QR và nhận thưởng
  `,
  },
  { key: 'Điều kiện tham gia', value: 'Tất cả mọi người' },
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
        'ACB, Lê Văn Hưu, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, 70206, Việt Nam',
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
      storeTypeName: 'Chung cư',
    },
    {
      id: 12529,
      name: 'ACB Quan 3',
      wkt: 'POINT (106.6848832 10.7689731)',
      createDate: '2021-10-21T14:43:51.557',
      brandId: 298,
      address:
        'ACB, Nguyễn Thị Minh Khai, Phường 5, Quận 3, Thành phố Hồ Chí Minh, 70200, Việt Nam',
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
      storeTypeName: 'Chung cư',
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
            Phần thưởng
          </Text>
        }
        extraHeader={
          <Box pr={4} as="img" src={mascot} width={140} height="auto" />
        }
        footer={
          <Button onClick={() => setGameStatus(null)} variant="primary">
            <h4>Quay lại</h4>
          </Button>
        }
      >
        <Box textAlign="center">
          <div style={{ width: '100%' }}>
            <h2>{badLuck ? 'Tiếc quá ' : 'Chúc mừng'}</h2>
            <DashedLine />
            {!badLuck ? (
              <p>Bạn đã nhận được 01 phần quà</p>
            ) : (
              <p>Bạn đã đoán sai rồi</p>
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
                  3 hũ mật ong cao cấp
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
          headerTitle="Lên rừng xuống biển"
          footer={
            <Button onClick={() => history.push('/qr-scan')}>Thực hiện</Button>
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
          headerTitle="Đoán vui có thưởng"
          footer={
            <Button
              onClick={() => {
                setGuessGame(false)
                setPlayGame(true)
              }}
            >
              Chơi ngay
            </Button>
          }
        >
          <div style={{ width: '100%' }}>
            <h4>Trò chơi</h4>
            <p>Đoán đúng ô chữ trong vòng 30s để nhận được phần thưởng nhé</p>
          </div>
        </Dialog>
      )}

      {playGame && (
        <Dialog
          visible={Boolean(playGame)}
          onClose={() => setPlayGame(false)}
          headerTitle={
            <Text sx={{ fontWeight: 'bold', color: 'white' }}>Đố bạn</Text>
          }
          footer={
            <Box textAlign="center">
              <Input
                style={{ width: '50%' }}
                placeholder="Đáp án của bạn"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <Button mt="1rem" onClick={checkGame}>
                Xác nhận
              </Button>
            </Box>
          }
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h5>Hãy ghép các chữ sau thành từ có nghĩa:</h5>
            <p>Đoán đúng ô chữ trong vòng 30s để nhận được phần thưởng nhé</p>
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
                Cùng Sullie băng qua bao đại dương
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
