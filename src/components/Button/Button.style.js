import styled from "styled-components";
import { color, fontSize, fontWeight, space } from "styled-system";
import primaryBtn from "../../assets/images/primary-btn.png";

const getBackgroundImg = (variant) => {
  switch (variant) {
    case "primary":
      return primaryBtn;
    default:
      return primaryBtn;
  }
};

const StyledButton = styled.div`
  background-image: url(${(props) => getBackgroundImg(props.variant)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  ${color}
  ${space}
  ${fontWeight}
  ${fontSize}
`;

export { StyledButton };
