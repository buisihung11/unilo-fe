import styled from "styled-components";
import summaryImage from "../../img/bg-customer-summary.png"
import bgBlueBtn from "../../img/btn-blue-bg.png"

export const StyledCustomerSummaryWrapper = styled.div`
  background: url(${summaryImage}) no-repeat center center/contain;
  height: 200px;
  margin-top: -2rem;
  padding-top: 1.5rem;
`

export const StyledHoneyPotCount = styled.div`
  margin-top: -1.3rem;
  font-weight: bold;
`

export const StyledNutLabel = styled.div`
    background: url(${bgBlueBtn}) no-repeat center center/contain;
  padding: 1rem 2rem;
  margin-top: -1rem;
`