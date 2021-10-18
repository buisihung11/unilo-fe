import React from 'react'
import {
  StyledVoucherCardWrapper,
  ImgThumbnail,
  ContentWrapper,
  Title,
  Description,
  ButtonWrapper,
} from './PromotionVoucher.style'
import HoneyPotUnit from '../HoneyPotUnitPromotion'
import btnOrg from '../../../../assets/images/btn-orange.png'

function PromotionVoucher(props) {
  return (
    <StyledVoucherCardWrapper>
      <ImgThumbnail image={props.item.img} />
      <ContentWrapper>
        <Title>{props.item.title}</Title>
        <Description>{props.item.description}</Description>
      </ContentWrapper>
      <ButtonWrapper image={btnOrg}>
        <HoneyPotUnit
          image={props.item.badgeIcon}
          count={props.item.quantity}
          size={'1.3rem'}
          imageSize={'1.5rem'}
        />
      </ButtonWrapper>
    </StyledVoucherCardWrapper>
  )
}

export default PromotionVoucher
