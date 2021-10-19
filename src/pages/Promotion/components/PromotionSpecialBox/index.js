import { useState } from 'react'
import {
  StyledSpecialBox,
  StyledImage,
  ContentWrapper,
  AcbLogo,
  Description,
  QuantityWrapper,
} from './PromotionSpecialBox.style'
import normalBadge from '../../../../assets/icons/honeypot1.png'
import acbActivity from '../../../../assets/images/acb-activity.jpg'
import acbLogo from '../../../../assets/images/acb-logo.png'
import { Button, Icon } from '../../../../components'

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
        <Button style={{ width: '30%' }} variant={'success'}>
          <QuantityWrapper>{noOfBadge}</QuantityWrapper>
          <Icon img={normalBadge} style={{ width: '1.5em' }} />
        </Button>
      </ContentWrapper>
    </StyledSpecialBox>
  )
}

export default PromotionSpecial
