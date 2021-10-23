import React, { useState } from 'react'
import honeypot1 from '../../assets/icons/honeypot1.png'
import honeypot2 from '../../assets/icons/honeypot2.png'
import honeypot3 from '../../assets/icons/honeypot3.png'
import useUser from '../../hooks/user/useUser'
import useWallets from '../../hooks/user/useWallets'
import Box from '../Box'
import HoneyPot from '../HoneyPot'
import NutLabel from '../NutLabel'
import Text from '../Text'
import { StyledCustomerSummaryWrapper } from './CustomerSummary.style'

function CustomerProfile({ name, avatar }) {
  const [customerName, setCustomerName] = useState('John Doe')
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      ml={'1rem'}
      alignItems={'center'}
      width="125px"
      textAlign="center"
    >
      <Box as="img" borderRadius="8px" src={avatar} width={40} height={40} />
      <Text fontWeight={'bold'}>{name}</Text>
    </Box>
  )
}

export default function CustomerSummary(props) {
  const { name, profileImg, id } = useUser()
  const { pointWallet, badge1Wallet, badge2Wallet, badge3Wallet } = useWallets()

  return (
    <StyledCustomerSummaryWrapper>
      <CustomerProfile avatar={profileImg} name={name} />
      <Box display={'flex'} flexDirection={'column'} mr={'1rem'}>
        <Box display={'flex'}>
          <HoneyPot image={honeypot1} count={badge1Wallet?.quantity} />
          <HoneyPot image={honeypot2} count={badge2Wallet?.quantity} />
          <HoneyPot image={honeypot3} count={badge3Wallet?.quantity} />
        </Box>
        <NutLabel count={pointWallet?.quantity} />
      </Box>
    </StyledCustomerSummaryWrapper>
  )
}
