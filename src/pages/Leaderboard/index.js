import React, { useState } from 'react'
import { Box, Icon, StyledUniloWrapper } from '../../components'
import { StyledUniloBackground } from '../../components/AppStyles'
import Layout from '../../components/Layout'
import backIcon from '../../assets/icons/back.png'
import { useHistory } from 'react-router'
import { FilterTab, FilterTabWrapper } from './components/Leaderboard.style'

const LeaderboardPage = () => {
  const history = useHistory()

  const [activeFilter, setActiveFilter] = useState('WEEK')

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Layout
        Header={
          <Box p={2} display="flex">
            <Icon img={backIcon} onClick={() => history.replace('/')} />
          </Box>
        }
        Content={
          <Box p={2}>
            <FilterTabWrapper>
              <FilterTab
                onClick={() => setActiveFilter('TODAY')}
                active={activeFilter === 'TODAY'}
              >
                Hôm nay
              </FilterTab>
              <FilterTab
                onClick={() => setActiveFilter('WEEK')}
                active={activeFilter === 'WEEK'}
              >
                Tuần này
              </FilterTab>
              <FilterTab
                onClick={() => setActiveFilter('MONTH')}
                active={activeFilter === 'MONTH'}
              >
                Tháng này
              </FilterTab>
            </FilterTabWrapper>
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}

export default LeaderboardPage
