import styled from 'styled-components'
import { Box } from '../../../components'

const FilterTabWrapper = styled(Box)`
  padding: 0.5rem 1rem;
  border-radius: 54px;
  width: 100%;
  height: 50px;
  width: 100%;
  background-color: #2665a1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`
const FilterTab = styled.div`
  ${(props) =>
    props.active && {
      'background-color': 'white',
      'border-radius': '54px',
      'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      color: 'black',
    }}
  padding: 0.5rem 1rem;
  transition: all 300ms ease-in-out;
`

export { FilterTabWrapper, FilterTab }
