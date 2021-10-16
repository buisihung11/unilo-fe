import styled from 'styled-components'

export const TabWrapper = styled.div`
  float: left;
  position: relative;
  width: 50%;
  margin-left: 4%;
  z-index: 3;
`

export const TabContent = styled.h4`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  text-align: center;
  -webkit-text-stroke: 1px black;
  color: white;
}
`

export const Mascot = styled.div`
  position: relative;
  top: -13%;
  left: 50%;
  background: url(${(props) => props.icon}) no-repeat center center/contain;
  height: 30%;
  z-index: 1;
  width: 50%;
`

export const TableWrapper = styled.div`
  z-index: 2;
  position: relative;
  top: -23%;
`

export const TableContent = styled.div`
  position: absolute;
  top: 10%;
  left: 12%;
  width: 76%;
  height: 80%;
  overflow: auto;
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`
