import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { WheelWrapper } from './Wheel.style'
import wheelImg from '../../assets/images/Wheel.png'
import { Img } from 'react-image'
import { Box } from '..'

const segments = ['A', 'B', 'C', 'C', 'C']

const Wheel = (props) => {
  useEffect(() => {
    let timeout
    if (props.isRotate) {
      timeout = setTimeout(() => {
        // console.log('TIMEOUT')
        // console.log('PRIZE IS ....')
        if (typeof props.onWinner === 'function') {
          props.onWinner('GIAI NHAT')
        }
      }, props.duration)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [props.isRotate, props.duration, props.onWinner])

  return (
    <WheelWrapper {...props}>
      <Box as={Img} src={wheelImg} width="100%" />
    </WheelWrapper>
  )
}

Wheel.propTypes = {
  isRotate: PropTypes.bool,
  deg: PropTypes.number,
  duration: PropTypes.number,
  onWinner: PropTypes.func,
}
Wheel.defaultProps = {
  isRotate: false,
  deg: 5000,
  duration: 5000,
}

export default Wheel
