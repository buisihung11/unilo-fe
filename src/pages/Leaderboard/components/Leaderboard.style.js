import styled from 'styled-components'
import { space, typography } from 'styled-system'
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
const FilterTab = styled(Box)`
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

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background-color: grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 4px solid #f1d302;
`

const UserName = styled.p`
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  ${typography}
  ${space}
`

export { FilterTabWrapper, FilterTab, Avatar, UserName }
