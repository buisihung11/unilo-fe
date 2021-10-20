import React, { useEffect, useState } from 'react'
import { StaticImg } from '..'
import Text from '../Text'
import { BearAnimationWrapper, LoadingOverlayWrapper } from './Loading.style'

const DEFAULT_DELAY = 3000 /* ms */

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
        <BearAnimationWrapper>
          <StaticImg
            src="assets/icons/bear-4.png"
            style={{ paddingTop: '2rem', width: '150px', height: 'auto' }}
          />
        </BearAnimationWrapper>
      </LoadingOverlayWrapper>
      {children}
    </>
  )
}

export const LoadingPlaceHolder = () => {
  return (
    <LoadingOverlayWrapper show>
      <Text fontWeight="bold" fontSize="2rem">
        Đang tải dữ liệu
      </Text>
      <BearAnimationWrapper>
        <StaticImg
          src="assets/icons/bear-4.png"
          style={{ paddingTop: '2rem', width: '150px', height: 'auto' }}
        />
      </BearAnimationWrapper>
    </LoadingOverlayWrapper>
  )
}

export default LoadingWrapper
