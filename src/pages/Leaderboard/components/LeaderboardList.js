import React from 'react'
import { Box } from '../../../components'
import PropTypes from 'prop-types'
import { Avatar } from './Leaderboard.style'
import Text from '../../../components/Text'

const LeaderboardList = ({ topUser = [] }) => {
  return (
    <Box display="flex" flexDirection="column">
      {topUser?.map((user) => (
        <Box
          mb={4}
          display="flex"
          flexdirection="row"
          bg="white"
          borderRadius="24px"
          alignItems="center"
          position="relative"
          height="50px"
        >
          <Box pr={3}>
            <Avatar src={user.avatar} />
          </Box>
          <Box display="flex" flexdirection="row" alignItems="center">
            <Text fontWeight="bold" mb={0} pr={2}>
              {user.userName}
            </Text>
            <Text mb={0}>{user.membership}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

LeaderboardList.propTypes = {
  topUser: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      userName: PropTypes.string,
      membership: PropTypes.string,
      totalNut: PropTypes.number,
      totalBadge: PropTypes.number,
    })
  ),
}

export default LeaderboardList
