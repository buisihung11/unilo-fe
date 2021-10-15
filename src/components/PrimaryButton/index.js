import React from "react";
import { ButtonWrapper, ButtonContent } from "./PrimaryButton.style";
import btnPrimary from "../../assets/images/btn-primary.png";

export default function PrimaryButton(props) {
  return <ButtonWrapper style={{ ...props.style}} img={btnPrimary}>
    <ButtonContent>{props.children}</ButtonContent>
  </ButtonWrapper>;
}