import React from 'react'
import {
  StyledVoucherCardWrapper,
  ImgThumbnail,
  ContentWrapper,
  Title,
  Description,
  QuantityWrapper,
} from './PromotionVoucher.style'
import { Button, Icon } from '../../../../components'

function PromotionVoucher(props) {
  return (
    <StyledVoucherCardWrapper>
      <ImgThumbnail image={props.item.img} />
      <ContentWrapper>
        <Title>{props.item.title}</Title>
        <Description>{props.item.description}</Description>
      </ContentWrapper>
      <Button
        style={{ width: '25%' }}
        variant={props.shownIndex ? 'success' : 'danger'}
      >
        <QuantityWrapper>{props.item.quantity}</QuantityWrapper>
        <Icon img={props.item.badgeIcon} style={{ width: '1.5em' }} />
      </Button>
    </StyledVoucherCardWrapper>
  )
}

export default PromotionVoucher
