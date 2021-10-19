import styled from 'styled-components'

export const StyledVoucherCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 19%;
  background-color: rgba(255, 255, 255, 0.34);
  align-items: center;
  margin-bottom: 0.5rem;
`
export const ImgThumbnail = styled.div`
  background: url(${(props) => props.image}) no-repeat center center/cover;
  width: 24%;
  height: 100%;
  border-radius: 20%;
  box-shadow: 1px 1px 1px #000000;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 68%;
  height: 120%;
  margin-left: 7px;
  padding-top: 2%;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 80%;
  @media (min-width: 400px) {
    font-size: 90%;
  }
`
export const Description = styled.div`
  font-size: 70%;
  text-align: left;
  @media (min-width: 400px) {
    font-size: 80%;
  }
`
export const QuantityWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  padding-right: 0.6rem;
  color: #fff;
`
