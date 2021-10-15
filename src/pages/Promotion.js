import { StyledUnilo, StyledUniloWrapper } from "../components/AppStyles/index";
import PromotionHeader from "../components/Promotion/PromotionHeader";
import PromotionSpecial from "../components/Promotion/PromotionSpecial";
import PromotionListVoucher from "../components/Promotion/PromotionListVoucher";

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
