import {
  StyledUniloWrapper,
  OverlayView,
} from '../../components/AppStyles/index'
import useGifts from '../../hooks/gifts/useGifts'
import { StyledPromotionWrapper } from './components/Promotion.style'
import PromotionHeader from './components/PromotionHeader'
import PromotionSpecial from './components/PromotionSpecialBox'
import PromotionVoucherList from './components/PromotionVoucherList'

export default function Promotion(props) {
  const { data: promotions } = useGifts()

  const hightlightPromotion = Array.isArray(promotions) && promotions[0]

  return (
    <StyledUniloWrapper>
      <OverlayView>
        <StyledPromotionWrapper>
          <PromotionHeader />
          <PromotionSpecial item={hightlightPromotion} />
          <PromotionVoucherList promotions={promotions} />
        </StyledPromotionWrapper>
      </OverlayView>
    </StyledUniloWrapper>
  )
}
