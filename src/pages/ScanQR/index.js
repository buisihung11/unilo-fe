import React, { useEffect, useRef, useState } from 'react'
import QrReader from 'react-qr-reader'
import {
  Box,
  Icon,
  StyledUniloWrapper,
  Dialog,
  Button,
  DashedLine,
} from '../../components'
import { StyledUniloBackground } from '../../components/AppStyles'
import Layout from '../../components/Layout'
import backIcon from '../../assets/icons/back.png'
import { useHistory } from 'react-router'
import Text from '../../components/Text'
import QrScanner from 'qr-scanner'
import axiosClient from '../../utils/axios'
import { useMutation } from 'react-query'
import useMembership from '../../hooks/user/useMembership'
import StyledNut from '../../components/NutStyle'
import mascot from '../../assets/images/reward-bear.png'
import CircularLoaddingDialog from '../../components/Loading/CircularLoaddingDialog'

const ScanQRPage = () => {
  const history = useHistory()
  const { currentMembership, nextMembership } = useMembership()

  const qrCodeRef = useRef(null)
  const inputFileRef = useRef(null)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const { mutate: submit, isLoading } = useMutation(
    () => {
      return axiosClient.post(`/event/submit`, {
        membershipId: currentMembership.id,
        actionId: data.actionId,
        description: data.description,
      })
    },
    {
      onError: (res) => {
        if (!isVisible) {
          setResult(res.response.data)
        }
      },
      onSuccess: async (res) => {
        setResult(res.pointAmount)
        setIsVisible(true)
      },
    }
  )

  const handleScan = (data) => {
    if (data) {
      setData(JSON.parse(data))
      submit()
    }
  }

  const handleError = (err) => {
    setError(err)
    console.error(err)
  }

  return (
    <StyledUniloWrapper>
      {isLoading && <CircularLoaddingDialog />}
      <Dialog
        visible={isVisible}
        headerTitle={
          <Text fontWeight="bold" color="white">
            Phần thưởng
          </Text>
        }
        extraHeader={
          <Box pr={4} as="img" src={mascot} width={140} height="auto" />
        }
        footer={
          <Button onClick={() => setIsVisible(false)} variant="primary">
            <h4>Quay lại</h4>
          </Button>
        }
      >
        <Box textAlign="center">
          <div style={{ width: '100%' }}>
            <h2>Chúc mừng</h2>
            <DashedLine />
            <p>Bạn đã nhận được 01 phần thưởng</p>
            <Text fontSize="3rem" mt={3}>
              {result} x{' '}
              <StyledNut nutSize={'50px'} position="relative" top="7px" />
            </Text>
          </div>
          <div style={{ width: '100%', paddingTop: '20px' }}>
            <p>{data?.description}</p>
          </div>
        </Box>
      </Dialog>
      <StyledUniloBackground />
      <Layout
        Header={
          <Box p={2} display="flex">
            <Icon img={backIcon} onClick={() => history.replace('/')} />
          </Box>
        }
        Content={
          <Box p={2} textAlign="center">
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
            <QrReader
              ref={qrCodeRef}
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ display: 'none' }}
              legacyMode
            />
            <Text py={2} fontWeight="bold">
              Đưa camera vào mã QR
            </Text>
            <input
              ref={inputFileRef}
              type="file"
              accept="image/png, image/gif, image/jpeg"
              hidden
            />
            <Button onClick={() => qrCodeRef.current?.openImageDialog()}>
              Chọn từ thư viện
            </Button>
            <Text py={2} fontWeight="bold">
              {result}
            </Text>
            <Text color="red" py={2} fontWeight="bold">
              {error}
            </Text>
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}

export default ScanQRPage
