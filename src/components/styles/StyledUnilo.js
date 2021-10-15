import styled from "styled-components";
import bgImage from "../../assets/images/bg.jpg";

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
`

export const VerticalView = styled.div`
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
export const DashedLine = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  border-top: 1px dashed;
`;
