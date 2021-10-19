import styled, { keyframes } from 'styled-components'
import bearImg from '../../../assets/images/sd-subie.gif'

export const StyledBear = styled.div`
  background: url(${bearImg}) no-repeat center center/contain;
  height: 20rem;
  width: 20rem;
`

const Animation = keyframes`
  from {
    margin-left: -100%;
    width: 100%;
  }

  to {
    margin-left: 0.5%;
    width: 100%;
  }
`

export const StyledBearWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: -12rem;
  z-index: 10;
  animation-duration: 2s;
  animation-name: ${Animation};
`
export const ButtonWrapper = styled.div`
  margin-left: -6rem;
  margin-top: 3rem;
  height: 3rem;
  width: 3rem;
`
