import styled from 'styled-components'
import { background } from 'styled-system'
import bgImage from '../../assets/images/bg.jpg'

export const StyledUniloWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #b2f9fc;
`

export const StyledUnilo = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 25vw;
  height: 100%;
  overflow: auto;
  background: url(${bgImage}) no-repeat center center/cover;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`

export const StyledUniloBackground = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${bgImage}) no-repeat center center/cover;
`

export const OverlayView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  padding: 1rem;
  margin: 0 auto;
  max-width: 25vw;
  height: 100vh;
  background: url(${bgImage});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px #000000ab;
  overflow: auto;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`

export const StyledDarkUnilo = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 25vw;
  height: 100%;
  overflow: auto;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bgImage}) no-repeat center center/cover;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`

export const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  cursor: pointer;
  ${background}
`
