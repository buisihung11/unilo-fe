import React, { useEffect, useRef, useState } from 'react'
import QrReader from 'react-qr-reader'
import { Box, Icon, StyledUniloWrapper } from '../../components'
import { StyledUniloBackground } from '../../components/AppStyles'
import Layout from '../../components/Layout'
import backIcon from '../../assets/icons/back.png'
import { useHistory } from 'react-router'
import Text from '../../components/Text'
import QrScanner from 'qr-scanner'

const ScanQRPage = () => {
  const history = useHistory()
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleScan = (data) => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = (err) => {
    setError(err)
    console.error(err)
  }

  const scanQrImg = (e) => {
    console.log(e)
    const image = e.currentTarget.files[0]
    console.log(`image`, image)
    QrScanner.scanImage(image)
      .then((result) => console.log(result))
      .catch((error) => console.log(error || 'No QR code found.'))
  }

  return (
    <StyledUniloWrapper>
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
            <Text py={2} fontWeight="bold">
              Đưa camera vào mã QR
            </Text>
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
