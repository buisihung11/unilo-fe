import React, { useEffect, useState } from 'react'
import { Img } from 'react-image'
import Text from '../Text'
import { BearAnimationWrapper, LoadingOverlayWrapper } from './Loading.style'
import mascot from '../../assets/icons/bear-4.png'

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
          <Img
            src={mascot}
            style={{ paddingTop: '2rem', width: '150px', height: 'auto' }}
          />
        </BearAnimationWrapper>
      </LoadingOverlayWrapper>
      {children}
    </>
  )
}

export default LoadingWrapper
