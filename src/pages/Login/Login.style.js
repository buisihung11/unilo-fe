import styled from 'styled-components'

const LoginWrapper = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem 2rem;
  padding-bottom: 6rem;
`

const WelcomeBear = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1rem;
  width: 140px;
  height: auto;
  z-index: 0;
`
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 5px;
  width: 100%;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`

export { LoginWrapper, WelcomeBear, Input }
