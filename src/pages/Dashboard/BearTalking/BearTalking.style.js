import styled from 'styled-components'
import bearImg from '../../../assets/icons/bear-main.gif'
import notFeedImg from '../../../assets/images/welcome-bear.png'

export const StyledBear = styled.div`
  background: url(${(props) => (props.hasFeed ? bearImg : notFeedImg)})
    no-repeat center center/ ${(props) => (props.hasFeed ? 'cover' : 'contain')};
  height: ${(props) => (props.hasFeed ? '15rem' : '15rem')};
  width: ${(props) => (props.hasFeed ? '25rem' : '10rem')};
`

export const StyledBearWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  z-index: 10;
`
