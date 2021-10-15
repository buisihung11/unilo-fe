import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledUniloWrapper } from '../../components/AppStyles'

// Images
import backImage from '../../assets/images/back.png'
import bgImage from '../../assets/images/bg.jpg'
import bean from '../../assets/images/bean.png'
import MiniGameBox from '../../components/OpenBoxGame'
import { CustomerSummary } from '../../components'

const RootStyle = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 25vw;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-size: cover;
  overflow: auto;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  margin-top: -5px;
`

const styles = {
  beanImg: {
    width: '30px',
    position: 'relative',
    top: '-3px',
    left: '-5px',
  },
}

export default function OpenBoxGame() {
  return (
    <StyledUniloWrapper>
      <RootStyle>
        <Link to="/dashboard">
          <img src={backImage} alt="back button" width="65px" />
        </Link>
        <ContentStyle>
          <p className={'h2 font-weight-bold'} style={{ color: '#FFFFFF' }}>
            Hộp quà bí mật
          </p>
          <p className={'h5 font-weight-bold'} style={{ color: '#3391EC' }}>
            Săn mật cùng ACB Subie
          </p>
          <p
            className={'h4 font-weight-bold pt-3'}
            style={{ color: '#F1D302' }}
          >
            1 lượt chơi = 2 <img src={bean} style={styles.beanImg} />
          </p>
        </ContentStyle>
        <MiniGameBox />
        <CustomerSummary />
      </RootStyle>
    </StyledUniloWrapper>
  )
}
