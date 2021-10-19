import React from 'react'
import {
  StyledVoucherListWrapper,
  StyledTitleWrapper,
  StyledFirstTitleWrapper,
  StyledListWrapprer,
} from './PromotionListVoucher.style'
import { TabTable } from '../../../../components'
import Text from '../../../../components/Text'
import lounge from '../../../../assets/images/lounge.jpg'
import badgeMedium from '../../../../assets/icons/honeypot2.png'
import PromotionVoucher from '../PromotionVoucherCard'

const vouchers = [
  {
    img: lounge,
    title: 'VIP Lounge',
    description: 'Tặng 1 lượt checkin phòng chờ thương gia',
    quantity: 3,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: 'VIP Lounge',
    description: 'Tặng 1 lượt checkin phòng chờ thương gia',
    quantity: 4,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: 'VIP Lounge',
    description: 'Tặng 1 lượt checkin phòng chờ thương gia',
    quantity: 5,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: 'VIP Lounge',
    description: 'Tặng 1 lượt checkin phòng chờ thương gia',
    quantity: 6,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: 'VIP Lounge',
    description: 'Tặng 1 lượt checkin phòng chờ thương gia',
    quantity: 7,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: 'VIP Lounge',
    description: 'Tặng 1 lượt checkin phòng chờ thương gia',
    quantity: 7,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: 'VIP Lounge',
    description: 'Tặng 1 lượt checkin phòng chờ thương gia',
    quantity: 7,
    badgeIcon: badgeMedium,
  },
]

function PromotionListVoucher() {
  return (
    <StyledVoucherListWrapper>
      <TabTable
        style={{ flex: 10, paddingTop: '4%' }}
        title1={'Gian hàng ưu đãi'}
        title2={'Quà tặng của tôi'}
      >
        <StyledListWrapprer>
          {vouchers.map((voucher) => {
            return <PromotionVoucher item={voucher} />
          })}
        </StyledListWrapprer>
      </TabTable>
    </StyledVoucherListWrapper>
  )
}

export default PromotionListVoucher
