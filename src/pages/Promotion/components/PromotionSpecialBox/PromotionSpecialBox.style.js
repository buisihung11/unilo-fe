import styled from 'styled-components'
import bgImg from '../../../../assets/images/bg-customer-summary.png'
import bgBlueBtn from '../../../../assets/images/btn-blue-bg.png'

export const StyledSpecialBox = styled.div`
  display: flex;
  align-items: center;
  background: url(${bgImg}) no-repeat center center/contain;
  background-size: 90% 110%;
  width: 100%;
  height: 25%;
  margin: 0 auto;
  padding-top: 0.5rem;
  padding-left: 16%;
`

export const StyledImage = styled.div`
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 26%;
  height: 45%;
  border-radius: 30%;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  padding-top: 1rem;
  width: 65%;
`

export const AcbLogo = styled.div`
  background: url(${(props) => props.image}) no-repeat center center/contain;
  width: 2rem;
  height: 2rem;
`
export const Description = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #000;
  width: 65%;
  text-align: center;
`
export const SpecialButton = styled.div`
  display: flex;
  justify-content: center;
  background: url(${bgBlueBtn}) no-repeat center center/contain;
  width: 55%;
  height: 30%;
  padding-left: 9%;
  padding-top: 5%;
  margin-top: -7%;
`
