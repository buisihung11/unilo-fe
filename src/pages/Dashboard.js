import React from "react";
import {StyledUnilo, StyledUniloWrapper} from "../components/styles/StyledUnilo";
import TierBox from "../components/TierBox";
import CustomerSummary from "../components/CustomerSummary";
import ExitButton from "../components/ExitButton";
import SettingButton from "../components/SettingButton";
import LeaderboardButton from "../components/LeaderboardButton";
import MinigameButton from "../components/MinigameButton";
import RewardButton from "../components/RewardButton";
import BearTalking from "../components/BearTalking";


export default function Dashboard(props) {
    return <StyledUniloWrapper>
        <StyledUnilo>
            <CustomerSummary/>
            <TierBox/>
            <div className={"container d-flex justify-content-center fixed-bottom"}>
                <ExitButton/>
                <LeaderboardButton/>
                <MinigameButton/>
                <RewardButton/>
                <SettingButton/>
            </div>
            <BearTalking/>
        </StyledUnilo>
    </StyledUniloWrapper>
}
