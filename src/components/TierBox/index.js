import React, { useState } from 'react'
import {
  StyledLowerCircle,
  StyledNutWrapper,
  StyledTierBoxWrapper,
  StyledTierHeader,
  StyledTierRoad,
  StyledUpperCircle,
} from './TierBox.style'

import { ReactComponent as InfoIcon } from '../../assets/icons/info-icon.svg'
import { StyledNut } from '../NutLabel/NutLabel.style'
import Box from '../Box'
import Text from '../Text'
import useWallets from '../../hooks/user/useWallets'
import useMembership from '../../hooks/user/useMembership'

export default function TierBox(props) {
  const { pointWallet } = useWallets()
  const { currentMembership, nextMembership } = useMembership()

  const lowerTier = currentMembership?.programTier?.name
  const upperTier = nextMembership?.programTier?.name

  const currentNutCount =
    currentMembership?.programTier?.minPoint + pointWallet?.quantity

  const upperTierNut = currentMembership?.programTier?.maxPoint

  const nutRemainCount = upperTierNut - currentNutCount
  const nutPercentage = (currentNutCount / upperTierNut) * 100 + '%'

  return (
    <StyledTierBoxWrapper>
      <StyledTierHeader>{`Thành viên ${lowerTier}`}</StyledTierHeader>
      <Box display={'flex'} justifyContent={'space-between'} mb={2}>
        <Text fontWeight={'bold'}>{lowerTier}</Text>
        <Text fontWeight={'bold'}>{upperTier}</Text>
      </Box>
      <StyledTierRoad>
        <StyledLowerCircle />
        <StyledUpperCircle />
        <StyledNutWrapper percentage={nutPercentage}>
          <StyledNut />
        </StyledNutWrapper>
      </StyledTierRoad>
      <Text fontWeight={'bold'} textAlign={'right'}>
        {`${currentNutCount}/${upperTierNut}`}
      </Text>
      <Box display={'flex'}>
        <InfoIcon />
        <Text ml={1}>
          {`Chỉ còn ${nutRemainCount} hạt dẻ nữa để thăng hạng ${upperTier}`}
        </Text>
      </Box>
    </StyledTierBoxWrapper>
  )
}
