import styled from 'styled-components'

export const TabWrapper = styled.div`
  position: relative;
  width: 50%;
  margin-left: 4%;
  z-index: 3;
  cursor: pointer;
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
export const ClickableTabContent = styled.h5`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  text-align: center;
}
`

export const TableWrapper = styled.div`
  z-index: 2;
  position: relative;
  top: -6%;
`

export const TableContent = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  overflow: auto;
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
`
