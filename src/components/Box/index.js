import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'

import {
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  zIndex,
} from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  zIndex,
  typography,
  border,
  shadow,
  position
)

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.fontWeight,
  ...propTypes.fontSize,
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.border,
}

export default Box
