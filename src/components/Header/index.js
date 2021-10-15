import React from "react";
import Icon from "../Icon";
import backIcon from "../../assets/icons/back.png";

export default function Header(props) {
  return <div style={{...props.style}}>
    <Icon img={backIcon} />
  </div>;
}