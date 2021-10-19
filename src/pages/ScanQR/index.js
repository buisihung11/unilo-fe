import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { Box, Icon, StyledUniloWrapper } from '../../components'
import { StyledUniloBackground } from '../../components/AppStyles'
import Layout from '../../components/Layout'
import backIcon from '../../assets/icons/back.png'
import { useHistory } from 'react-router'
import Text from '../../components/Text'

const ScanQRPage = () => {
  const history = useHistory()
  const [result, setResult] = useState(null)

  const handleScan = (data) => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = (err) => {
    console.error(err)
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
            <p>{result}</p>
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}

export default ScanQRPage
