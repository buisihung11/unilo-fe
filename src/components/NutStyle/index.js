import nutImage from '../../assets/icons/nut.png'
import { position } from 'styled-system'
import styled from 'styled-components'

const DEFAULT_NUT_SIZE = '30px'

const StyledNut = styled.div`
  display: inline-block;
  background: url(${nutImage});
  background-size: cover;
  width: ${(props) => props.nutSize ?? DEFAULT_NUT_SIZE};
  height: ${(props) => props.nutSize ?? DEFAULT_NUT_SIZE};
  ${position}
`

export default StyledNut
