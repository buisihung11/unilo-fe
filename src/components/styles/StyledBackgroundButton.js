import styled from "styled-components";

const DEFAULT_WIDTH = "4rem"

export const StyledBackgroundButton = styled.div`
  background: url(${(props => props.image)}) no-repeat center center/contain;
  width: ${(props => props.width ?? DEFAULT_WIDTH)};
  height: ${DEFAULT_WIDTH};
  margin: .1rem;
`