import React from "react";
import {StyledUnilo, StyledUniloWrapper} from "../components/styles/StyledUnilo";
import TierBox from "../components/TierBox";
import CustomerSummary from "../components/CustomerSummary";


export default function Dashboard(props) {
    return <StyledUniloWrapper>
        <StyledUnilo>
            <CustomerSummary />
            <TierBox />
        </StyledUnilo>
    </StyledUniloWrapper>
}
