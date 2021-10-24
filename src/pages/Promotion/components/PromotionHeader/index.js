import { useState } from 'react'
import { Link } from 'react-router-dom'
import ExitButton from '../ExitButton'
import HoneyPot from '../HoneyPotPromotion'
import {
  StyledPromotionHeaderWrapper,
  StyledBadgesCard,
  ButtonWrapper,
} from './PromotionHeader.style'
import normalBadge from '../../../../assets/icons/honeypot1.png'
import mediumBadge from '../../../../assets/icons/honeypot2.png'
import specialBadge from '../../../../assets/icons/honeypot3.png'

function PromotionHeader(props) {
  const noOfHoneyPot1 = props.badge1
  const noOfHoneyPot2 = props.badge2
  const noOfHoneyPot3 = props.badge3

  return (
    <StyledPromotionHeaderWrapper>
      <ButtonWrapper>
        <Link to="/dashboard">
          <ExitButton />
        </Link>
      </ButtonWrapper>

      <StyledBadgesCard>
        <HoneyPot image={normalBadge} count={noOfHoneyPot1?.quantity} />
        <HoneyPot image={mediumBadge} count={noOfHoneyPot2?.quantity} />
        <HoneyPot image={specialBadge} count={noOfHoneyPot3?.quantity} />
      </StyledBadgesCard>
    </StyledPromotionHeaderWrapper>
  )
}

export default PromotionHeader
