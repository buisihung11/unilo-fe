import React, { useState } from 'react'
import { StyledCustomerSummaryWrapper } from './CustomerSummary.style'
import HoneyPot from '../HoneyPot'
import honeypot1 from '../../assets/icons/honeypot1.png'
import honeypot2 from '../../assets/icons/honeypot2.png'
import honeypot3 from '../../assets/icons/honeypot3.png'
import NutLabel from '../NutLabel'
import avtImage from '../../assets/images/avt.png'
import Box from '../Box'
import Text from '../Text'

function CustomerProfile(props) {
  const [customerName, setCustomerName] = useState('John Doe')
  return (
    <Box display={"flex"} flexDirection={"column"} ml={"1rem"} alignItems={"center"}>
      <img src={avtImage} width={40} height={40} />
      <Text fontWeight={"bold"}>{customerName}</Text>
    </Box>
  )
}

export default function CustomerSummary(props) {
  return (
    <StyledCustomerSummaryWrapper>
      <CustomerProfile />
      <Box display={"flex"} flexDirection={"column"} mr={"1rem"}>
        <Box display={'flex'}>
          <HoneyPot image={honeypot1} count={10} />
          <HoneyPot image={honeypot2} count={5} />
          <HoneyPot image={honeypot3} count={3} />
        </Box>
        <NutLabel />
      </Box>
    </StyledCustomerSummaryWrapper>
  )
}
