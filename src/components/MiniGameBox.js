import React from "react";
import styled from "styled-components";
// Images
import firstBox from "../assets/images/giftbox/box_1.png";
import secondBox from "../assets/images/giftbox/box_2.png";
import thirdBox from "../assets/images/giftbox/box_3.png";
import fourthBox from "../assets/images/giftbox/box_4.png";

const StyledImage = styled.img`
  width: 32%;
  height: 32%;
  filter: drop-shadow(0px 4px 40px #ffffff);
`;

export default function MiniGameBox() {
  return (
    <div>
      <div className={"d-flex justify-content-around mt-2"}>
        <StyledImage src={firstBox} />
        <StyledImage src={secondBox} />
      </div>
      <div className={"d-flex justify-content-around mt-4"}>
        <StyledImage src={thirdBox} />
        <StyledImage src={fourthBox} />
      </div>
    </div>
  );
}
