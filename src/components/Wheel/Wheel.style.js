import styled, { keyframes } from 'styled-components'
import { position, size, width, height, space } from 'styled-system'
import wheelImg from '../../assets/images/wheel/wheel.png'

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
  background-image: url(${wheelImg});
  background-repeat: no-repeat; /* Ensure that background does not repeat */
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  position: relative;
  padding: 0;
  max-width: 340px;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  list-style: none;
  transition: all ${(props) => props.duration ?? '5000'}ms ease-out;
  /* transform: rotate(${(props) => (props.isRotate ? props.deg : 0)}deg); */
  animation-name: ${(props) =>
    props.isRotate ? rotateAnimation(props.deg) : ''};
  animation-duration: ${(props) => props.duration}ms;
  animation-fill-mode: forwards;
  z-index: inherit;
  /* overflow: hidden; */
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
const WheelPointer = styled.img`
  position: absolute;
  z-index: 99;
  width: 100px;
  height: auto;
  transform: translate(-50%, -100%);
  ${size}
  ${space}
  ${position}
`

const WheelTrigger = styled.img`
  position: absolute;
  z-index: 99;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${size}
  ${space}
  ${position}
`
const WheelBackground = styled.img`
  position: absolute;
  z-index: 99;
  width: 360px;
  height: 360px;
  top: 0;
  left: 0;
  ${size}
  ${space}
  ${position}
`

const WheelSliceContent = styled.div`
  position: absolute;
  left: -100%;
  width: 200%;
  height: 200%;
`

export {
  WheelWrapper,
  WheelSliceWrapper,
  WheelSliceContent,
  WheelPointer,
  WheelBackground,
  WheelTrigger,
}
