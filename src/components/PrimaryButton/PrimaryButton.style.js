import styled from "styled-components";

const DEFAULT_HEIGHT = "4rem"

export const ButtonWrapper = styled.div`
  position: relative;
  background: url(${props => props.img}) no-repeat center center/contain;
  height: 100%;
  min-height: ${DEFAULT_HEIGHT};
`;

export const ButtonContent = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;