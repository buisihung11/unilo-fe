import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Icon } from '../../../../components'
import { getBadgeImage } from '../../../../utils/utils'
import {
  ContentWrapper,
  Description,
  ImgThumbnail,
  QuantityWrapper,
  StyledVoucherCardWrapper,
  Title,
} from './PromotionVoucher.style'

function PromotionVoucher(props) {
  const { item } = props
  const {
    name,
    description,
    bannerImg,
    exchangedWalletAmount,
    exchangedWalletType,
  } = item || {}

  const history = useHistory()

  const getPromotionDetail = () => {
    // TODO: Fix this
    history.push({
      pathname: `/promotion/${props.item.id}`,
      state: item,
    })
  }

  const walletType = exchangedWalletType?.name

  return (
    <StyledVoucherCardWrapper key={props.item.id}>
      <ImgThumbnail image={bannerImg} />
      <ContentWrapper onClick={() => getPromotionDetail()}>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </ContentWrapper>

      <Button
        style={{ width: '25%' }}
        variant={props.shownIndex ? 'success' : 'danger'}
      >
        <QuantityWrapper>{exchangedWalletAmount}</QuantityWrapper>
        <Icon img={getBadgeImage(walletType)} style={{ width: '1.5em' }} />
      </Button>
    </StyledVoucherCardWrapper>
  )
}

export default PromotionVoucher
