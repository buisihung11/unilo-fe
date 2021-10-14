import {
  StyledUnilo,
  StyledUniloWrapper,
} from "../components/styles/StyledUnilo";
import StyledPromotion from "../components/styles/Promotion.module.css";
import PromotionHeader from "../components/PromotionHeader";
import PromotionSpecial from "../components/PromotionSpecial";

export default function Promotion(props) {
  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <div>
          <PromotionHeader />
          <PromotionSpecial />
        </div>
      </StyledUnilo>
    </StyledUniloWrapper>
  );
}
