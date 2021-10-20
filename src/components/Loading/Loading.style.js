import styled, { keyframes } from 'styled-components'

const movingAnimation = keyframes`
  from {
    transform: translateX(-20px)
  }
  to {transform: translateX(20px)}
`

export const LoadingOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.show ? 'visibility' : 'hidden')};
  background-color: #00afff;
  color: white;
`
export const BearAnimationWrapper = styled.div`
  animation: ${movingAnimation} infinite 2000ms ease-in-out;
`
