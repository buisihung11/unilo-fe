import React from 'react'
import { LoadingCircular, Overlay } from '../AppStyles'

import { Box } from '..'
import styled from 'styled-components'

const LoaddingWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-width: 300px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CircularLoaddingDialog = () => {
  return (
    <LoaddingWrapper>
      <Overlay />
      <Box backgroundColor="white" padding={2} borderRadius="8px">
        <LoadingCircular />
      </Box>
    </LoaddingWrapper>
  )
}

export default CircularLoaddingDialog
