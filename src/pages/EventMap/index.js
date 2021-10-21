import React, { useState } from 'react'
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet'
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
} from '../../components'
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
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImYxM2FlZGY4LTIwM2MtNGZmNi1iMzJjLTgzY2FkOWE4NjMyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQUNCIEJBTksiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhY2IiLCJGY21Ub2tlbiI6IiIsIkltYWdlVXJsIjoiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiIxMjMxMjMiLCJCcmFuZElkIjoiMjk4IiwiQnJhbmROYW1lIjoiQUNCIiwiQWN0aXZlIjoiVHJ1ZSIsImV4cCI6MTYzNTM3OTIwMCwiaXNzIjoiVFJBREVaT05FTUFQIiwiYXVkIjoiVFJBREVaT05FTUFQIn0.mamAoWLUhyvNF8v8cfEefrLCCqfXe8xpLWrKyZSY5YY'
  return axios
    .get(`https://stg-api.tradezonemap.com/api/v1.0/stores/brand`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => res.data)
}

const EventACBMapPage = () => {
  const history = useHistory()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const { data } = useQuery(['event-locations'], getEventLocations)

  return (
    <StyledUniloWrapper>
      <Dialog
        visible={Boolean(selectedEvent)}
        onClose={() => setSelectedEvent(null)}
        headerTitle="Mission Name"
        footer={<Button onClick={() => setSelectedEvent(null)}>Đóng</Button>}
      >
        <div style={{ width: '100%' }}>
          <h4>{'Mission Name'}</h4>
          <p>
            <small>
              {/* ({startDate || 'dd/mm/yyyy'} - {expirationDate || 'dd/mm/yyyy'}) */}
            </small>
            Nội dung sự kiện
          </p>
        </div>
      </Dialog>
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
                zoom={8}
                scrollWheelZoom={true}
                zoomDelta={3}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                />
                {data?.map((e) => (
                  <Marker
                    key={e.id}
                    position={{
                      lat: Number(e.geom.coordinates[1]),
                      lng: Number(e.geom.coordinates[0]),
                    }}
                    icon={IconStores}
                    eventHandlers={{
                      click: () => setSelectedEvent(e),
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
