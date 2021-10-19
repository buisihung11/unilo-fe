import styled, { keyframes } from 'styled-components'
import { position, size, width, height } from 'styled-system'
import wheelImg from '../../assets/images/Wheel.png'

const calculateSkew = (total, index) => {
  const rotate = 360 / total
  const skewY = rotate + 90
  return `rotate(${rotate * index}deg) skewY(${skewY}deg)`
}

const rotateAnimation = (deg) => keyframes`
  from { 
              transform: rotate(0deg); 
          } to { 
              transform: rotate(${deg}deg); 
          }
`

const WheelWrapper = styled.div`
  position: relative;
  padding: 0;
  max-width: 300px;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  list-style: none;
  overflow: hidden;
  transition: all ${(props) => props.duration ?? '5000'}ms ease-out;
  /* transform: rotate(${(props) => (props.isRotate ? props.deg : 0)}deg); */
  animation-name: ${(props) =>
    props.isRotate ? rotateAnimation(props.deg) : ''};
  animation-duration: ${(props) => props.duration}ms;
  animation-fill-mode: forwards;
  z-index: inherit;
  overflow: hidden;
  ${height}
  ${width}
  ${size}
  ${position}
`

const WheelSliceWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
`

const WheelSliceContent = styled.div`
  position: absolute;
  left: -100%;
  width: 200%;
  height: 200%;
`

export { WheelWrapper, WheelSliceWrapper, WheelSliceContent }
