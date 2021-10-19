import styled from 'styled-components'
import bgGame from  "../../assets/images/tbl-tab.png"

const SidebarWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: .2em;
  display: flex;
  flex-direction: column;
  z-index: 40;
  align-items: center;
`

const StyledGameBackground = styled.div`
  background: url(${bgGame}) no-repeat center center/contain;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export { SidebarWrapper, StyledGameBackground}
