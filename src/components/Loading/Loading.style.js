import styled from 'styled-components'

export const LoadingOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.show ? 'visibility' : 'hidden')};
  background-color: #0038a8;
  color: white;
`
