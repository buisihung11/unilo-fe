import styled from 'styled-components'
import bgChat from '../../../assets/images/bg-chat.png'


export const StyledMessage = styled.div`
  background: url(${bgChat}) no-repeat center center/contain;
  display: flex;
  width: 250px;
  height: 250px;
  align-items: center;
  padding: 2rem;
  position: absolute;
  justify-content: center;
  left: 6%;
  top: -30%;
`

export const StyledMessageText = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 2.5rem;
`
