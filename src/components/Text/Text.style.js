import styled from 'styled-components'
import { color, typography, space } from 'styled-system'

const Text = styled.p`
  ${typography}
  ${color}
`
export const BorderText = styled.p`
  ${typography}
  ${color}
  ${space}
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

export default Text
