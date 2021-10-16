import {
  StyledUnilo,
  StyledUniloWrapper,
} from '../../components/AppStyles/index'
import {
  PromotionHeader,
  PromotionSpecial,
  PromotionVoucherList,
} from '../../components/'

export default function Promotion(props) {
  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <PromotionHeader />
        <PromotionSpecial />
        <PromotionVoucherList />
      </StyledUnilo>
    </StyledUniloWrapper>
  )
}
