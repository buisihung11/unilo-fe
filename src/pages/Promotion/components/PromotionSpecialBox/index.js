import { useState } from 'react'
import {
  StyledSpecialBox,
  StyledImage,
  ContentWrapper,
  AcbLogo,
  Description,
  SpecialButton,
} from './PromotionSpecialBox.style'
import HoneyPotUnit from '../HoneyPotUnitPromotion'
import normalBadge from '../../../../assets/icons/honeypot1.png'
import acbActivity from '../../../../assets/images/acb-activity.jpg'
import acbLogo from '../../../../assets/images/acb-logo.png'

function PromotionSpecial() {
  const [voucherDescription, setvoucherDescription] = useState(
    ' Ưu đãi 0.5% lãi suất khi gửi tiền tiết kiệm qua ...'
  )
  const [noOfBadge, setnoOfBadge] = useState(3)

  return (
    <StyledSpecialBox>
      <StyledImage image={acbActivity} />
      <ContentWrapper>
        <AcbLogo image={acbLogo} />
        <Description>
          <span>{voucherDescription}</span>
        </Description>
        <SpecialButton>
          <HoneyPotUnit
            image={normalBadge}
            count={3}
            size={'120%'}
            imageSize={'40%'}
            paddingLeft={'10%'}
          />
        </SpecialButton>
      </ContentWrapper>
    </StyledSpecialBox>
  )
}

export default PromotionSpecial
