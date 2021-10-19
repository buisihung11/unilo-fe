import React from 'react'
import { Box, CustomerSummary, StyledUniloWrapper, TierBox } from '../../components'
import { Overlay, StyledUniloBackground } from '../../components/AppStyles'
import Layout from '../../components/Layout'
import Icon from '../../components/Icon'
import backIcon from '../../assets/icons/back.png'
import Text from '../../components/Text'
import { useHistory } from 'react-router-dom'


export default function Account() {
  const router = useHistory()
  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Overlay />
      <Layout
        Header={
          <Box p={2}>
            <Icon img={backIcon} onClick={() => router.replace('/')} />
            <Text as='h1' fontSize='2rem' color='#fff' pb={2} textAlign={"center"}>
              Tài khoản
            </Text>
            <CustomerSummary />
            <TierBox />
          </Box>
        }
        Content={
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            zIndex='90'
            position='relative'
            overflow='hidden'
          >
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}