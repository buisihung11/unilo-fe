import React from 'react'
import { Box } from '..'
import { StyledBox } from './GameBox.style'

import firstBox from '../../assets/images/giftbox/box_1.png'
import secondBox from '../../assets/images/giftbox/box_2.png'
import thirdBox from '../../assets/images/giftbox/box_3.png'
import fourthBox from '../../assets/images/giftbox/box_4.png'

const openBox = () => {
  console.log('openBox')
}

export default function MiniGameBox() {
  return (
    <>
      <Box display="flex" justifyContent="space-around" mt={2}>
        <StyledBox src={firstBox} onClick={openBox} />
        <StyledBox src={secondBox} onClick={openBox} />
      </Box>
      <Box display="flex" justifyContent="space-around" mt={4}>
        <StyledBox src={thirdBox} onClick={openBox} />
        <StyledBox src={fourthBox} onClick={openBox} />
      </Box>
    </>
  )
}
