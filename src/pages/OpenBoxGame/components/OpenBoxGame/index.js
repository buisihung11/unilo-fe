import React from 'react'
import { Box } from '../../../../components'
import { StyledBox } from './GameBox.style'

import firstBox from '../../../../assets/images/giftbox/box_1.png'
import secondBox from '../../../../assets/images/giftbox/box_2.png'
import thirdBox from '../../../../assets/images/giftbox/box_3.png'
import fourthBox from '../../../../assets/images/giftbox/box_4.png'
import styled from 'styled-components'

const openBox = () => {
  console.log('openBox')
}

const MiniGameWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
`

export default function MiniGameBox({ onPlay, totalItem = 3 }) {
  const matrix = Math.sqrt(totalItem)

  return (
    <MiniGameWrapper row={matrix} column={matrix}>
      {[...new Array(totalItem)].map(() => (
        <StyledBox src={firstBox} onClick={onPlay} />
      ))}
    </MiniGameWrapper>
  )
}
