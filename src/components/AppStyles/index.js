import styled from 'styled-components'
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