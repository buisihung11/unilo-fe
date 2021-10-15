import styled from "styled-components";
import bgImage from "../../img/bg.jpg";

export const StyledUniloWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #b2f9fc;
`;

export const StyledUnilo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 0 auto;
  max-width: 25vw;
  height: 100%;
  background: url(${bgImage});
  background-size: cover;
  overflow: auto;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`;
