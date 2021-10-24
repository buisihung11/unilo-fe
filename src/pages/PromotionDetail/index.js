import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  StyledUniloWrapper,
  OverlayView,
  Header,
  SimpleTable,
  Button,
  ExpandableItem,
  Icon,
  Dialog,
  Box,
} from '../../components'
import Banner from './components/Banner'
import honeypot1 from '../../assets/icons/honeypot1.png'
import { getBadgeImage, formatDate } from '../../utils/utils'
import ErrorDialog from '../../components/Dialog/ErrorDialog'
import useRedeemption from '../../hooks/gifts/useRedeemption'
import Text from '../../components/Text'

export default function PromotionDetail(props) {
  const [error, setError] = useState(null)
  const [currentVoucher, setCurrentVoucher] = useState(null)
  const { mutateAsync, isLoading } = useRedeemption()
  const onRedeemptVoucher = async () => {
    console.log(currentVoucher)
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

  let history = useHistory()
  let {
    name,
    description,
    bannerImg,
    exchangedWalletAmount,
    exchangedWalletType,
    providerName,
    startDate,
    expirationDate,
    metadata,
  } = history.location.state.item

  let { shownIndex } = history.location.state

  let parsedMetadata = JSON.parse(metadata)

  const { qualification, giftCode, guide, location } = parsedMetadata

  const walletType = exchangedWalletType?.name

  let descriptions = [
    {
      key: 'Mô tả',
      value: description,
    },
    { key: 'Điều kiện áp dụng', value: qualification ?? 'N/A' },
  ]

  const giftDescriptions = [
    { key: 'Mã quà tặng', value: giftCode ?? 'N/A' },
    { key: 'Hướng dẫn', value: guide ?? 'N/A' },
    { key: 'Nơi áp dụng', value: location ?? 'N/A' },
  ]

  if (shownIndex === 0) descriptions = [...descriptions, ...giftDescriptions]

  const content = descriptions.map(({ key, value }, i) => (
    <ExpandableItem key={key} label={key} isShown={i === 0}>
      {value}
    </ExpandableItem>
  ))
  return (
    <StyledUniloWrapper>
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
        <Header style={{ flex: 1 }} />
        <SimpleTable style={{ flex: 5 }} title="Chi tiết">
          <div style={{ width: '100%' }}>
            <Banner img={bannerImg} subtitle={providerName || 'Partner Name'} />
            <h4>{name || 'Voucher Name'}</h4>
            <p>
              <small>
                ({formatDate(startDate) || 'dd/mm/yyyy'} -{' '}
                {formatDate(expirationDate) || 'dd/mm/yyyy'})
              </small>
            </p>
            {content}
          </div>
        </SimpleTable>
        {shownIndex === 1 && (
          <Button variant="primary">
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
              onClick={() => setCurrentVoucher(history.location.state.item)}
            >
              <h2 style={{ margin: '0 .5em 0 0' }}>
                {exchangedWalletAmount || 0}
              </h2>
              <Icon
                img={getBadgeImage(walletType) || honeypot1}
                style={{ height: '80%' }}
              />
            </div>
          </Button>
        )}
      </OverlayView>
    </StyledUniloWrapper>
  )
}
