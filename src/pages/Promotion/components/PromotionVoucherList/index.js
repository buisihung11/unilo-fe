import React, { useState } from 'react'

import { TabTable } from '../../../../components'
import useVouchersWallet from '../../../../hooks/user/useVouchersWallet'
import PromotionVoucher from '../PromotionVoucherCard'
import {
  StyledListWrapprer,
  StyledVoucherListWrapper,
} from './PromotionListVoucher.style'

function PromotionListVoucher({ promotions = [], onRedeempt }) {
  const { vouchers } = useVouchersWallet()

  const [shownIndex, setshownIndex] = useState(1)

  const showPromotions = shownIndex === 1 ? promotions : vouchers

  return (
    <StyledVoucherListWrapper>
      <TabTable
        clickHandler1={() => setshownIndex(0)}
        clickHandler2={() => setshownIndex(1)}
        title1={'Gian hàng ưu đãi'}
        title2={'Giỏ quà của tôi'}
      >
        <StyledListWrapprer>
          {showPromotions?.map((voucher, idx) => {
            return (
              <PromotionVoucher
                item={voucher}
                shownIndex={shownIndex}
                key={`${shownIndex === 1 ? 'promotion' : 'voucher'}-${
                  voucher.id
                }-${idx}`}
                showAction={shownIndex === 1}
                onRedeempt={() => onRedeempt(voucher)}
              />
            )
          })}
        </StyledListWrapprer>
      </TabTable>
    </StyledVoucherListWrapper>
  )
}

export default PromotionListVoucher
