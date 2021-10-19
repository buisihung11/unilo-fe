import React, { useState } from 'react'
import {
  StyledVoucherListWrapper,
  StyledListWrapprer,
} from './PromotionListVoucher.style'
import { TabTable } from '../../../../components'
import lounge from '../../../../assets/images/lounge.jpg'
import badgeMedium from '../../../../assets/icons/honeypot2.png'
import PromotionVoucher from '../PromotionVoucherCard'

const promotionVouchers = [
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
  const [shownIndex, setshownIndex] = useState(1)

  return (
    <StyledVoucherListWrapper>
      <TabTable
        style={{ flex: 10, paddingTop: '4%' }}
        clickHandler1={() => setshownIndex(0)}
        clickHandler2={() => setshownIndex(1)}
        title1={'Gian hàng ưu đãi'}
        title2={'Quà tặng của tôi'}
      >
        <StyledListWrapprer>
          {promotionVouchers.map((voucher) => {
            return <PromotionVoucher item={voucher} shownIndex={shownIndex} />
          })}
        </StyledListWrapprer>
      </TabTable>
    </StyledVoucherListWrapper>
  )
}

export default PromotionListVoucher
