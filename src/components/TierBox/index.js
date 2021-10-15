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

export default function TierBox(props) {
    const [tierTitle, setTierTitle] = useState('Thành viên vàng')
    const [lowerTier, setLowerTier] = useState('Vàng')
    const [upperTier, setUpperTier] = useState('Kim Cương')
    const [currentNutCount, setCurrentNutCount] = useState(150)
    const [upperTierNut, setUpperTierNut] = useState(400)

    const nutRemainCount = upperTierNut - currentNutCount
    const nutPercentage = (currentNutCount / upperTierNut) * 100 + '%'

    return (
        <StyledTierBoxWrapper>
            <StyledTierHeader>{tierTitle}</StyledTierHeader>
            <div className={'d-flex justify-content-between'}>
                <p className={'font-weight-bold'}>{lowerTier}</p>
                <p className={'font-weight-bold'}>{upperTier}</p>
            </div>
            <StyledTierRoad>
                <StyledLowerCircle />
                <StyledUpperCircle />
                <StyledNutWrapper percentage={nutPercentage}>
                    <StyledNut />
                </StyledNutWrapper>
            </StyledTierRoad>
            <div className={'font-weight-bold text-right'}>
                {`${currentNutCount}/${upperTierNut}`}
            </div>
            <div className={'mt-1 d-flex'}>
                <InfoIcon />
                <p className={'h6 ml-1'}>
                    {`Chỉ còn ${nutRemainCount} hạt dẻ nữa để thăng hạng ${upperTier}`}
                </p>
            </div>
        </StyledTierBoxWrapper>
    )
}
