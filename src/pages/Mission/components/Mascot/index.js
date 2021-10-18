import styled from 'styled-components'

const Mascot = styled.div`
  flex: 3;
  background: url(${(props) => props.image}) no-repeat left center/contain;
  width: 100%;
  margin: 0.1rem;
`

export default Mascot
