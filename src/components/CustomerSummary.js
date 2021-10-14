import React from "react";
import {StyledCustomerSummaryWrapper} from "./styles/StyledCustomerSummary";
import CustomerProfile from "./CustomerProfile";
import HoneyPot from "./HoneyPot";
import honeypot1 from "../img/honeypot1.png"
import honeypot2 from "../img/honeypot2.png"
import honeypot3 from "../img/honeypot3.png"
import NutLabel from "./NutLabel";

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