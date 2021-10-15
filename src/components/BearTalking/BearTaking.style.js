import styled from "styled-components";
import bearImage from "../../assets/images/gauxanh7.png"
import bgChat from "../../assets/images/bg-chat.png";

export const StyledBearTaking = styled.div`
  margin-top: 6rem;
  background: url(${bearImage}) no-repeat center center/contain;
  width: 300px;
  height: 300px;
  position: relative;
`

export const StyledMessage = styled.div`
  background: url(${bgChat}) no-repeat center center/contain;
  display: flex;
  width: 300px;
  height: 300px;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: -50%;
  left: -5%;
`

export const StyledMessageText = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
`