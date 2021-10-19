import React, { useState } from 'react'
import { Box, Icon, StyledUniloWrapper } from '../../components'
import { StyledUniloBackground } from '../../components/AppStyles'
import Layout from '../../components/Layout'
import backIcon from '../../assets/icons/back.png'
import { useHistory } from 'react-router'
import { FilterTab, FilterTabWrapper } from './components/Leaderboard.style'
import useLeaderboard from '../../hooks/leaderboard/useLeaderboard'
import Text from '../../components/Text'
import LeaderboardCard from './components/LeaderboardCard'
import LeaderboardList from './components/LeaderboardList'

const LeaderboardPage = () => {
  const history = useHistory()

  const [activeFilter, setActiveFilter] = useState('WEEK')
  const { data: topTen } = useLeaderboard()

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
                pt={4}
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
                pt={4}
                onClick={() => setActiveFilter('MONTH')}
                active={activeFilter === 'MONTH'}
              >
                Tháng này
              </FilterTab>
            </FilterTabWrapper>
            <Box textAlign="center">
              <Text pt={2} fontWeight="bold">
                Cùng xem gấu nào siêng năng nhất tuần nè
              </Text>
              <Box pt={2} display="flex" justifyContent="space-between">
                {topTen?.slice(0, 3).map((user, idx) => (
                  <Box
                    pt={(idx === 0 || idx === 2) && 4}
                    key={`top-3-${user.userName}`}
                    flex={1}
                  >
                    <LeaderboardCard user={user} />
                  </Box>
                ))}
              </Box>
              <Box mt={4} px={4}>
                <LeaderboardList topUser={topTen} />
              </Box>
            </Box>
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}

export default LeaderboardPage
