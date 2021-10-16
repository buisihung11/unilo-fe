import styled from 'styled-components'
import badgesCard from '../../assets/images/badges-board.png'

export const StyledPromotionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledBadgesCard = styled.div`
  display: flex;
  flex-direction: space-between;
  background: url(${badgesCard}) no-repeat center/contain;
  width: 12rem;
  height: 5rem;
  margin-left: 10rem;
`
