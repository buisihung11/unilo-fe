import styled from 'styled-components'

export const HistoryItemWrapper = styled.div`
  position: relative;
`

export const HistoryItemContent = styled.div`
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

export const HistoryItemLeftWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 .5em',
  justifyContent: 'center',
})

export const HistoryItemName = styled.h5({
  textAlign: 'justify',
})

export const HistoryItemDate = styled.h6({
  margin: '.1em',
  fontWeight: 'normal',
  textAlign: 'justify',
})
