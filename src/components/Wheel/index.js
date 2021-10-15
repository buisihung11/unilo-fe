import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  WheelSliceContent,
  WheelSliceWrapper,
  WheelWrapper,
} from "./Wheel.style";

const segments = ["A", "B", "C", "C", "C"];

const Wheel = (props) => {
  useEffect(() => {
    let timeout;
    if (props.isRotate) {
      timeout = setTimeout(() => {
        console.log("TIMEOUT");
        console.log("PRIZE IS ....");
      }, props.duration);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [props.isRotate, props.duration]);

  return <WheelWrapper {...props} />;
};

Wheel.propTypes = {
  isRotate: PropTypes.bool,
  deg: PropTypes.number,
  duration: PropTypes.number,
};
Wheel.defaultProps = {
  isRotate: false,
  deg: 0,
  duration: 5000,
};

export default Wheel;
