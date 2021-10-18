import styled from 'styled-components'
import badgesCard from '../../../../assets/images/badges-board.png'

export const StyledPromotionHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const StyledBadgesCard = styled.div`
  display: flex;
  justify-content: flex-end;
  background: url(${badgesCard}) no-repeat center/contain;
  width: 15rem;
  height: 5rem;
`
