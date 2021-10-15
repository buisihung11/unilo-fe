import styled from "styled-components";
import { color, fontSize, fontWeight, size, space } from "styled-system";

const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-width: 300px;
  z-index: 10;
  display: flex;
  align-items: center;
  ${size}
  ${color}
  ${space}
  ${fontWeight}
  ${fontSize}
`;

const DialogBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  z-index: 9;
`;

const DialogOverlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  cursor: pointer;
  z-index: 5;
`;

const DialogContentWrapper = styled.div`
  position: relative;
  min-height: 350px;
  padding: 2rem;
  z-index: 10;
  width: 100%;
`;
const DialogContent = styled.div`
  position: relative;
  z-index: 20;
`;

export {
  DialogWrapper,
  DialogContentWrapper,
  DialogOverlay,
  DialogBackground,
  DialogContent,
};
