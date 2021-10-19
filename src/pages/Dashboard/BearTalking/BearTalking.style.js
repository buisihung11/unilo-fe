import styled from 'styled-components'
import bearImg from "../../../assets/images/gauxanh7.png"

export const StyledBear = styled.div`
  background: url(${bearImg}) no-repeat center center/contain;
  height: 20rem;
  width: 20rem;
`

export const StyledBearWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  z-index: 10;
`
