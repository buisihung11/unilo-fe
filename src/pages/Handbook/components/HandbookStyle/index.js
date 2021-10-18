import styled from 'styled-components'
import bgHandbook from '../../../../assets/images/bg-handbook.png'
import bgMascot from '../../../../assets/images/bear-icecream.png'

export const StyledWrapper = styled.div`
  z-index: 1;
  position: relative;
`

export const StyledCover = styled.img`
  width: 100%;
  z-index: 2;
`

export const StyledMascot = styled.div`
  background: url(${bgMascot}) no-repeat center center/contain;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 32%;
  height: 32%;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  margin-right: 2%;
  z-index: 4;
`
export const StyledContent = styled.div`
  position: absolute;
  left: 16%;
  top: 14%;
  right: 16%;
  bottom: 7%;
  z-index: 3;
`
