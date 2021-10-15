import React from "react";

import firstBox from "../../assets/images/giftbox/box_1.png";
import secondBox from "../../assets/images/giftbox/box_2.png";
import thirdBox from "../../assets/images/giftbox/box_3.png";
import fourthBox from "../../assets/images/giftbox/box_4.png";

import { StyledBox } from "./GameBox.style";

export default function MiniGameBox() {
  return (
    <>
      <div className={"d-flex justify-content-around mt-2"}>
        <StyledBox src={firstBox} />
        <StyledBox src={secondBox} />
      </div>
      <div className={"d-flex justify-content-around mt-4"}>
        <StyledBox src={thirdBox} />
        <StyledBox src={fourthBox} />
      </div>
    </>
  );
}
