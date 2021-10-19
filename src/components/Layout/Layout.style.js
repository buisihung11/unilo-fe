import styled from 'styled-components'

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
`

const LayoutHeaderWrapper = styled.div`
  width: 100%;
  flex: 0 1 auto;
`

const LayoutContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  width: 100%;
  z-index: 9;
`

const LayoutFooterWrapper = styled.div`
  width: 100%;
  flex: 0 1 auto;
`

export {
  LayoutWrapper,
  LayoutHeaderWrapper,
  LayoutContentWrapper,
  LayoutFooterWrapper,
}
