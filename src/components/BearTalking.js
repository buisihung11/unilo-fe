import React, {useState} from "react";
import {StyledBear, StyledMessage, StyledMessageText} from "./styles/StyledBear";

export default function BearTalking() {
    const [message, setMessage] = useState("Subie xin chào buổi sáng! Chúc Nguyên có một buổi sáng an lành nhé!");
    return <div className={"d-flex justify-content-center"}>
        <StyledBear>
            <StyledMessage>
                <StyledMessageText>{message}</StyledMessageText>
            </StyledMessage>
        </StyledBear>
    </div>
}