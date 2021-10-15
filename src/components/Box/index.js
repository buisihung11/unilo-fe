import styled from 'styled-components'
import { color, flexbox, layout, space, zIndex } from 'styled-system'

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
)

export default Box
