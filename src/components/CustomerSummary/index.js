import React, {useState} from "react";
import {StyledCustomerSummaryWrapper} from "./CustomerSummary.style";
import HoneyPot from "../HoneyPot";
import honeypot1 from "../../assets/icons/honeypot1.png"
import honeypot2 from "../../assets/icons/honeypot2.png"
import honeypot3 from "../../assets/icons/honeypot3.png"
import NutLabel from "../NutLabel";
import avtImage from "../../assets/images/avt.png";

function CustomerProfile(props) {
    const [customerName, setCustomerName] = useState("John Doe");
    return <div className={"d-flex align-items-center flex-column ml-2"}>
        <img src={avtImage} width={40} height={40} />
        <p className={"font-weight-bold"}>{customerName}</p>
    </div>
}

export default function CustomerSummary(props) {
    return <StyledCustomerSummaryWrapper>
        <div className={"d-flex align-items-center justify-content-around h-100"}>
            <CustomerProfile />
            <div className={"d-flex flex-column justify-content-between mr-2"}>
                <div className={"d-flex"}>
                    <HoneyPot image={honeypot1} count={10} />
                    <HoneyPot image={honeypot2} count={5} />
                    <HoneyPot image={honeypot3} count={3} />
                </div>
                <NutLabel />
            </div>
        </div>
    </StyledCustomerSummaryWrapper>
}