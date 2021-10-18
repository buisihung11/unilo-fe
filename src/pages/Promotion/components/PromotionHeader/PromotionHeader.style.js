import styled from 'styled-components'
import badgesCard from '../../../../assets/images/badges-board.png'

export const StyledPromotionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledBadgesCard = styled.div`
  display: flex;
  background: url(${badgesCard}) no-repeat center/contain;
  width: 11rem;
  height: 3rem;
  margin-left: 11.5rem;
`
