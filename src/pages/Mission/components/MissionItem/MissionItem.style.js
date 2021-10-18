import styled from 'styled-components'

export const MissionItemWrapper = styled.div`
  position: relative;
`

export const MissionItemContent = styled.div`
  position: absolute;
  top: 20%;
  left: 3%;
  width: 94%;
  height: 60%;
  overflow: auto;
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
`

export const MissionItemName = styled.h6({
  flex: 5,
  alignSelf: 'center',
  margin: '0 .1em',
  textAlign: 'justify',
})
