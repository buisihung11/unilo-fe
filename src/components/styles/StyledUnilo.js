import styled from "styled-components";
import bgImage from "../../img/bg.jpg"

export const StyledUniloWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #B2F9FC;
`

export const StyledUnilo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  margin: 0 auto;
  max-width: 25vw;
  height: 100%;
  background: url(${bgImage});
  background-size: cover;
  overflow: auto;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`