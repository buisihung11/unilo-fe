import styled from 'styled-components'
import bgImg from '../../../../assets/images/bg-customer-summary.png'
import itemBg from '../../../../assets/images/item-lg.png'

export const StyledSpecialBox = styled.div`
  display: flex;
  align-items: center;
  background: url(${bgImg}) no-repeat center center/contain;
  background-size: 90% 110%;
  width: 100%;
  height: 24%;
  margin: 0 auto;
  padding-top: 0.5rem;
  padding-left: 18%;

  @media (max-width: 320px) {
    height: 23%;
  }

  @media (min-width: 360px) {
    height: 28%;
  }

  @media (min-width: 375px) {
    height: 22%;
  }
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
  font-size: 7px;
  font-weight: bold;
  color: #000;
  width: 65%;
  text-align: center;
  @media (min-width: 375px) {
    font-size: 9px;
  }
`
export const QuantityWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  padding-right: 0.4rem;
  padding-bottom: 0.2rem;
  @media (min-width: 375px) {
    font-size: 1.4rem;
  }
`
