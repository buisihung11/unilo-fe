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
        <div>
          <PromotionHeader />
          <PromotionSpecial />
          <PromotionListVoucher />
        </div>
      </StyledUnilo>
    </StyledUniloWrapper>
  );
}
