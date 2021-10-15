import styled from "styled-components";
import Wheel from "../../assets/images/Wheel.png";
const calculateSkew = (total, index) => {
  const rotate = 360 / total;
  const skewY = rotate + 90;
  return `rotate(${rotate * index}deg) skewY(${skewY}deg)`;
};

const WheelWrapper = styled.div`
  position: relative;
  padding: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
  background-image: url(${Wheel});
  background-size: contain;
  background-position: center;
  transition: all ${(props) => props.duration ?? "5000"}ms ease-out;
  transform: rotate(${(props) => (props.isRotate ? props.deg : 0)}deg);
`;

const WheelSliceWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const WheelSliceContent = styled.div`
  position: absolute;
  left: -100%;
  width: 200%;
  height: 200%;
`;

export { WheelWrapper, WheelSliceWrapper, WheelSliceContent };
