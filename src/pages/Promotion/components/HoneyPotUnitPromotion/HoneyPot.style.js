import styled from 'styled-components'

const DEFAULT_PADDING_TOP = '18%'
const DEFAULT_PADDING_LEFT = '17%'
const DEFAULT_WIDTH_CARD = '5rem'

export const StyledHoneyPotCard = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) => props.paddingTop ?? DEFAULT_PADDING_TOP};
  padding-left: ${(props) => props.paddingLeft ?? DEFAULT_PADDING_LEFT};
  width: ${(props) => props.width ?? DEFAULT_WIDTH_CARD};
`
const DEFAULT_FONT_SIZE = '4rem'
const DEFAULT_MARGIN_TOP_COUNT = '-1.8rem'
const DEFAULT_PADDING_RIGHT_COUNT = '0.4rem'

export const StyledHoneyPotCount = styled.div`
  margin-top: ${(props) => props.marginTopCount ?? DEFAULT_MARGIN_TOP_COUNT};
  padding-right: ${(props) =>
    props.paddingRightCount ?? DEFAULT_PADDING_RIGHT_COUNT};
  font-weight: bold;
  color: #fff;
  font-size: ${(props) => props.size ?? DEFAULT_FONT_SIZE};
`
