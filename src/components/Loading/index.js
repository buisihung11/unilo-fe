import React, { useEffect, useState } from 'react'
import Text from '../Text'
import { LoadingOverlayWrapper } from './Loading.style'

const DEFAULT_DELAY = 5000 /* ms */

const LoadingWrapper = ({ children }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, DEFAULT_DELAY)
  }, [])

  return (
    <>
      <LoadingOverlayWrapper show={show}>
        <Text fontWeight="bold" fontSize="2rem">
          Đang tải dữ liệu
        </Text>
      </LoadingOverlayWrapper>
      {children}
    </>
  )
}

export default LoadingWrapper
