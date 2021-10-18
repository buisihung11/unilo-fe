import styled from 'styled-components'
import bgImg from '../../../../assets/images/table-voucher-list.png'

export const StyledVoucherListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  width: 20rem;
  height: 30rem;
  margin: 0 auto;
`

export const StyledTitleWrapper = styled.div`
  display: flex;
  height: 4rem;
  padding-top: 1rem;
  margin-left: 1.8rem;
`

export const StyledFirstTitleWrapper = styled.div`
  padding-right: 0.8rem;
`
export const StyledListWrapprer = styled.div`
  margin-top: 2px;
  margin-left: 1.8rem;
  width: 17rem;
  height: 18rem;
  overflow-y: auto;
  overflow-x: hidden;
`
