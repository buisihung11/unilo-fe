import { useState } from 'react'
import ExitButton from '../Button/ExitButton'
import HoneyPot from '../HoneyPotPromotion'
import {
  StyledPromotionHeaderWrapper,
  StyledBadgesCard,
  StyledHoneyPot1,
} from './PromotionHeader.style'
import normalBadge from '../../assets/icons/honeypot1.png'
import mediumBadge from '../../assets/icons/honeypot2.png'
import specialBadge from '../../assets/icons/honeypot3.png'

function PromotionHeader() {
  const [normalBadges, setnormalBadges] = useState(5)
  const [mediumBagdes, setmediumBagdes] = useState(10)
  const [specialBadges, setspecialBadges] = useState(3)

  return (
    <StyledPromotionHeaderWrapper>
      <ExitButton />
      <StyledBadgesCard>
        <HoneyPot image={normalBadge} count={10} />
        <HoneyPot image={mediumBadge} count={5} />
        <HoneyPot image={specialBadge} count={3} />
      </StyledBadgesCard>
    </StyledPromotionHeaderWrapper>
  )
}

export default PromotionHeader
