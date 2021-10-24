import { useState } from 'react'
import { Box, Button, Dialog } from '../../components'
import {
  StyledUniloWrapper,
  OverlayView,
} from '../../components/AppStyles/index'
import ErrorDialog from '../../components/Dialog/ErrorDialog'
import CircularLoaddingDialog from '../../components/Loading/CircularLoaddingDialog'
import Text from '../../components/Text'
import useGifts from '../../hooks/gifts/useGifts'
import useRedeemption from '../../hooks/gifts/useRedeemption'
import useWallets from '../../hooks/user/useWallets'
import { StyledPromotionWrapper } from './components/Promotion.style'
import PromotionHeader from './components/PromotionHeader'
import PromotionSpecial from './components/PromotionSpecialBox'
import PromotionVoucherList from './components/PromotionVoucherList'

export default function Promotion(props) {
  const { data: promotions } = useGifts()
  const { badge1Wallet, badge2Wallet, badge3Wallet } = useWallets()
  const { mutateAsync, isLoading } = useRedeemption()
  const [error, setError] = useState(null)
  const [currentVoucher, setCurrentVoucher] = useState(null)

  const hightlightPromotion = Array.isArray(promotions) && promotions[0]

  const onRedeemptVoucher = async () => {
    try {
      const voucherId = currentVoucher.id
      setCurrentVoucher(null)
      const res = await mutateAsync(voucherId)
    } catch (error) {
      const errMsg = error.response.data?.message ?? 'Có lỗi'
      setCurrentVoucher(null)
      setError(errMsg)
    } finally {
      setCurrentVoucher(null)
    }
  }

  return (
    <StyledUniloWrapper>
      {isLoading && <CircularLoaddingDialog />}
      <ErrorDialog
        visible={Boolean(error)}
        errorMsg={error}
        onClose={() => setError(null)}
      />
      <Dialog
        visible={Boolean(currentVoucher)}
        headerTitle="Xác nhận"
        footer={
          <Box display="flex" justifyContent="space-around">
            <Button
              width="150px"
              variant="success"
              onClick={() => setCurrentVoucher(null)}
            >
              Quay lại
            </Button>
            <Button width="150px" onClick={onRedeemptVoucher}>
              Xác nhận
            </Button>
          </Box>
        }
      >
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="1rem">
            Bạn có muốn đổi voucher này không?
          </Text>
        </Box>
      </Dialog>
      <OverlayView>
        <StyledPromotionWrapper>
          <PromotionHeader
            badge1={badge1Wallet}
            badge2={badge2Wallet}
            badge3={badge3Wallet}
          />
          <PromotionSpecial
            onRedeempt={setCurrentVoucher}
            item={hightlightPromotion}
          />
          <PromotionVoucherList
            onRedeempt={setCurrentVoucher}
            promotions={promotions}
          />
        </StyledPromotionWrapper>
      </OverlayView>
    </StyledUniloWrapper>
  )
}
