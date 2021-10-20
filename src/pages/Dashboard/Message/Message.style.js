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
  top: -20%;
  animation: expand-bounce 2s 1;

  @keyframes expand-bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const StyledMessageText = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 2.5rem;
`

export const CloseButton = styled.i({
  position: 'absolute',
  top: '25%',
  right: '10%',
  backgroundColor: 'white',
  padding: '2px 5px',
  border: '1px solid gray',
  borderRadius: '1em',
  color: 'gray',
})
