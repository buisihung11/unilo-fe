import {
  StyledUnilo,
  StyledUniloWrapper,
} from "../components/styles/StyledUnilo";
import PromotionHeader from "../components/PromotionHeader";
import PromotionSpecial from "../components/PromotionSpecial";
import PromotionListVoucher from "../components/PromotionListVoucher";

export default function Promotion(props) {
  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <PromotionHeader />
        <PromotionSpecial />
        <PromotionListVoucher />
      </StyledUnilo>
    </StyledUniloWrapper>
  );
}
