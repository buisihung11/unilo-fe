import styled from 'styled-components'
import { space } from 'styled-system'
import summaryImage from '../../assets/images/bg-customer-summary.png'

export const StyledCustomerSummaryWrapper = styled.div`
  background: url(${summaryImage}) no-repeat center center/contain;
  min-height: 200px;
  ${space}
`
