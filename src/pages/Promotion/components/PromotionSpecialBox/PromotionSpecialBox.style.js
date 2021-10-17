import styled from 'styled-components'
import bgImg from '../../../../assets/images/bg-customer-summary.png'
import bgBlueBtn from '../../../../assets/images/btn-blue-bg.png'

export const StyledSpecialBox = styled.div`
  display: flex;
  align-items: center;
  background: url(${bgImg}) no-repeat center center/contain;
  width: 20rem;
  height: 8rem;
  margin: 0 auto;
  padding-top: 0.5rem;
  padding-left: 3.5rem;
`

export const StyledImage = styled.div`
  background: url(${(props) => props.image});
  background-size: cover;
  width: 4.5rem;
  height: 4.1rem;
  border-radius: 30%;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  padding-left: 0.7rem;
  padding-top: 0.5rem;
`

export const AcbLogo = styled.div`
  background: url(${(props) => props.image}) no-repeat center center/contain;
  width: 34px;
  height: 20px;
`
export const Description = styled.div`
  font-size: 8.5px;
  font-weight: bold;
  color: #000;
  width: 8rem;
  text-align: center;
`
export const SpecialButton = styled.div`
  background: url(${bgBlueBtn}) no-repeat center center/contain;
  width: 90px;
  height: 50px;
  padding-left: 12px;
`
