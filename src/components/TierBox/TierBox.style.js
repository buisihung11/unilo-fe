import styled from "styled-components";

export const StyledTierBoxWrapper = styled.div`
  background: rgba(236, 184, 51, 0.8);
  border-radius: 1rem;
  padding: .4rem 1rem;
  width: 100%;
  margin: 0px auto;
`

export const StyledTierHeader = styled.p`
  font-weight: bold;
  color: white;
  font-size: 18px;
`

export const StyledTierRoad = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: linear-gradient(180deg, #6D6F71 23.96%, rgba(109, 111, 113, 0.458904) 96.67%, rgba(109, 111, 113, 0) 100%, rgba(109, 111, 113, 0.515152) 100%);
  border-radius: 5px;
`

export const StyledLowerCircle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: -2px;
  left: -3px;
  background-color: white;
`

export const StyledUpperCircle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  right: -3px;
  top: -2px;
  background-color: white;
`


export const StyledNutWrapper = styled.div`
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #2665A1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: calc(${props => (props.percentage ?? "50%") } - 20px) ;
  top: -20px;
`


