import styled from 'styled-components'
import { color, fontSize, fontWeight, space } from 'styled-system'
import primaryBtn from '../../assets/images/bg-customer-summary.png'

const getBackgroundImg = (variant) => {
  switch (variant) {
    case 'primary':
      return primaryBtn
    default:
      return primaryBtn
  }
}

export const StyledButton = styled.div`
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
`

const DEFAULT_WIDTH = '4rem'

export const StyledBackgroundButton = styled.div`
    background: url(${(props) => props.image}) no-repeat center center/contain;
    width: ${(props) => props.width ?? DEFAULT_WIDTH};
    height: ${DEFAULT_WIDTH};
    margin: 0.1rem;
`
