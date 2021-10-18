import { useState } from 'react'
import { Link } from 'react-router-dom'
import ExitButton from '../ExitButton'
import HoneyPot from '../HoneyPotPromotion'
import {
  StyledPromotionHeaderWrapper,
  StyledBadgesCard,
} from './PromotionHeader.style'
import normalBadge from '../../../../assets/icons/honeypot1.png'
import mediumBadge from '../../../../assets/icons/honeypot2.png'
import specialBadge from '../../../../assets/icons/honeypot3.png'

function PromotionHeader() {
  const [noOfHoneyPot1, setNoOfHoneyPot1] = useState(3)
  const [noOfHoneyPot2, setNoOfHoneyPot2] = useState(8)
  const [noOfHoneyPot3, setNoOfHoneyPot3] = useState(10)

  return (
    <StyledPromotionHeaderWrapper>
      <Link to="/dashboard">
        <ExitButton />
      </Link>
      <StyledBadgesCard>
        <HoneyPot image={normalBadge} count={noOfHoneyPot1} />
        <HoneyPot image={mediumBadge} count={noOfHoneyPot2} />
        <HoneyPot image={specialBadge} count={noOfHoneyPot3} />
      </StyledBadgesCard>
    </StyledPromotionHeaderWrapper>
  )
}

export default PromotionHeader
