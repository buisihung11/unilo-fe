import React from 'react'
import { Link } from 'react-router-dom'
import { StyledDarkUnilo, StyledUniloWrapper } from '../../components/AppStyles'
import StyledNut from '../../components/NutStyle'
import { Box, CustomerSummary, BorderText, MiniGameBox } from '../../components'

// Images
import backImage from '../../assets/images/back.png'

export default function OpenBoxGame() {
  return (
    <StyledUniloWrapper>
      <StyledDarkUnilo>
        <Link to="/dashboard">
          <img src={backImage} alt="back button" width="65px" />
        </Link>
        <Box display="flex" flexDirection="column" alignItems="center" mt={-1}>
          <BorderText as="h2" color="#FFFFFF" fontWeight="bold">
            Hộp quà bí mật
          </BorderText>
          <BorderText as="h5" color="#3391EC" fontWeight="bold">
            Săn mật cùng ACB Subie
          </BorderText>
          <BorderText as="h4" color="#F1D302" fontWeight="bold" pt={3}>
            1 lượt chơi = 2
            <StyledNut position="relative" top="5px" left="3px" />
          </BorderText>
        </Box>
        <MiniGameBox />
        <CustomerSummary />
      </StyledDarkUnilo>
    </StyledUniloWrapper>
  )
}
