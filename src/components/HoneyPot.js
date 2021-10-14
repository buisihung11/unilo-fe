import React, {useState} from "react";
import {StyledBackgroundButton} from "./styles/StyledBackgroundButton";
import {StyledHoneyPotCount} from "./styles/StyledCustomerSummary";

export default function HoneyPot(props) {
    return <div className={"d-flex flex-column align-items-center m-1"}>
        <StyledBackgroundButton image={props.image} width={"2rem"} style={{marginTop: "-1.5rem"}}/>
        <StyledHoneyPotCount>{props.count}</StyledHoneyPotCount>
    </div>
}