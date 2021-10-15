import styled from "styled-components";
import { display, position, size, space } from "styled-system";
import titleBox from "../../assets/images/TitleBox.png";

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
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  ${display}
  ${size}
  ${space}
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

const DialogHeader = styled.div`
  background-image: url(${titleBox});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(20px, -60%);
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 70px;
  z-index: 20;
  display: flex;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${position}
  ${space}
`;

const DialogFooterWrapper = styled.div`
  transform: translate(0, 100%);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
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
  aspect-ratio: 6/7;
  min-height: 350px;
  max-height: 80%;
  padding: 2rem;
  z-index: 10;
  width: 100%;
`;
const DialogContent = styled.div`
  position: relative;
  max-height: 100%;
  overflow: auto;
  z-index: 20;
`;

export {
  DialogWrapper,
  DialogContentWrapper,
  DialogOverlay,
  DialogBackground,
  DialogContent,
  DialogHeader,
  DialogFooterWrapper,
};
