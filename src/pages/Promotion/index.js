import {
  StyledUniloWrapper,
  OverlayView,
} from '../../components/AppStyles/index'
import { StyledPromotionWrapper } from './components/Promotion.style'
import PromotionHeader from './components/PromotionHeader'
import PromotionSpecial from './components/PromotionSpecialBox'
import PromotionVoucherList from './components/PromotionVoucherList'

export default function Promotion(props) {
  return (
    <StyledUniloWrapper>
      <OverlayView>
        <StyledPromotionWrapper>
          <PromotionHeader />
          <PromotionSpecial />
          <PromotionVoucherList />
        </StyledPromotionWrapper>
      </OverlayView>
    </StyledUniloWrapper>
  )
}
