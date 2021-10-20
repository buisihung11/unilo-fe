import React from 'react'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  const getPromotionDetail = () => {
    history.push({
      pathname: `/promotion/${props.item.id}`,
      state: {
        id: props.item.id,
        name: props.item.title,
        description: props.item.description,
        applyRule: props.item.applyRule,
        bannerImg: props.item.img,
        startDate: props.item.startDate,
        expirationDate: props.item.expirationDate,
        exchangedValue: props.item.quantity,
        exchangedType: props.item.badgeIcon,
        partnerName: props.item.partnerName,
      },
    })
  }
  return (
    <StyledVoucherCardWrapper key={props.item.id}>
      <ImgThumbnail image={props.item.img} />
      <ContentWrapper onClick={() => getPromotionDetail()}>
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
