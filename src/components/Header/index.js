import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Icon from '../Icon'
import backIcon from '../../assets/icons/back.png'

const HeaderWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const Title = styled.h3({
  flex: 5,
  textAlign: 'center',
  margin: 0,
})
export default function Header(props) {
  const history = useHistory()
  return (
    <HeaderWrapper>
      <Icon img={backIcon} onClick={history.goBack} />
      <Title className="stroked-text">{props.title}</Title>
      <div style={{ flex: 1 }} />
    </HeaderWrapper>
  )
}
