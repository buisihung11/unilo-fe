import styled from 'styled-components'

export const StyledVoucherCardWrapper = styled.div`
  display: flex;
  width: 15.9rem;
  height: 4rem;
  background-color: rgba(255, 255, 255, 0.34);
  align-items: center;
  margin-bottom: 0.9rem;
`
export const ImgThumbnail = styled.div`
  background: url(${(props) => props.image}) no-repeat center center/cover;
  width: 3.2rem;
  height: 3rem;
  border-radius: 20%;
  box-shadow: 1px 1px 1px #000000;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.5rem;
  height: 3.5rem;
  margin-left: 7px;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
`
export const Description = styled.div`
  font-size: 11px;
`
export const ButtonWrapper = styled.div`
  background: url(${(props) => props.image}) no-repeat center center/contain;
  width: 4rem;
  height: 3.3rem;
`
