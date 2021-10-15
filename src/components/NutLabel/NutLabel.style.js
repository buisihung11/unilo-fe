import styled from "styled-components";
import bgBlueBtn from "../../assets/images/btn-blue-bg.png";
import nutImage from "../../assets/icons/nut.png";

export const StyledNutLabel = styled.div`
    background: url(${bgBlueBtn}) no-repeat center center/contain;
  padding: 1rem 2rem;
  margin-top: -1rem;
`

const DEFAULT_NUT_SIZE = "30px"


export const StyledNut = styled.div`
  background: url(${nutImage});
  background-size: cover;
  width: ${(props => props.nutSize ?? DEFAULT_NUT_SIZE)};
  height: ${(props => props.nutSize ?? DEFAULT_NUT_SIZE)};
`