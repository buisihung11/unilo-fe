import React, {useState} from "react";
import {StyledNutLabel} from "./styles/StyledCustomerSummary";
import {StyledNut, StyledNutWrapper} from "./styles/StyledTierBox";

export default function NutLabel(props) {
    const [currentNutCount, setCurrentNutCount] = useState(150);
    return <StyledNutLabel>
        <div className={"d-flex justify-content-center align-items-center"}>
            <div>{currentNutCount}</div>
            <StyledNut nutSize={"20px"}/>
        </div>
    </StyledNutLabel>
}