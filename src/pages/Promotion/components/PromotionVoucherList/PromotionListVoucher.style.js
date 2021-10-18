import styled from 'styled-components'
import bgImg from '../../../../assets/images/table-voucher-list.png'

export const StyledVoucherListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-size: 100% 80%;
  background-position-x: center;
  width: 100%;
  height: 70%;
  margin: 0 auto;
`

export const StyledTitleWrapper = styled.div`
  display: flex;
  height: 10%;
  padding-top: 4%;
  margin-left: 9%;
`

export const StyledFirstTitleWrapper = styled.div`
  padding-right: 10%;
`
export const StyledListWrapprer = styled.div`
  margin-top: 5%;
  margin-left: 8%;
  width: 80%;
  height: 60%;
  overflow-y: auto;
  overflow-x: hidden;
`
