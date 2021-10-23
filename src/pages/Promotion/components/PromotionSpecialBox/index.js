import { useState } from 'react'
import acbLogo from '../../../../assets/images/acb-logo.png'
import { Button, Icon } from '../../../../components'
import { getBadgeImage } from '../../../../utils/utils'
import {
  AcbLogo,
  ContentWrapper,
  Description,
  QuantityWrapper,
  StyledImage,
  StyledSpecialBox,
} from './PromotionSpecialBox.style'

function PromotionSpecial({ item }) {
  const {
    name,
    description,
    bannerImg,
    exchangedWalletAmount,
    exchangedWalletType,
  } = item || {}

  const walletType = exchangedWalletType?.name

  return (
    <StyledSpecialBox>
      <StyledImage image={bannerImg} />
      <ContentWrapper>
        <AcbLogo image={acbLogo} />
        <Description>
          <span>{description}</span>
        </Description>
        <Button
          style={{ width: '30%', marginBottom: '5%' }}
          variant={'success'}
        >
          <QuantityWrapper>{exchangedWalletAmount}</QuantityWrapper>
          <Icon img={getBadgeImage(walletType)} style={{ width: '1.4em' }} />
        </Button>
      </ContentWrapper>
    </StyledSpecialBox>
  )
}

export default PromotionSpecial
