import React from 'react'
import { Box } from '../../../components'
import PropTypes from 'prop-types'
import { Avatar } from './Leaderboard.style'
import Text from '../../../components/Text'
import nutImage from '../../../assets/icons/nut.png'
import honeypot1 from '../../../assets/icons/honeypot1.png'

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
          <Box display="flex" flex={1} flexdirection="row" alignItems="center">
            <Box width="50%" pr={2}>
              <Text fontWeight="bold" mb={0}>
                {user.userName}
              </Text>
            </Box>
            <Box display="flex" flex={1} justifyContent="flex-start">
              {user.totalNut}{' '}
              <Box ml={1} as="img" src={nutImage} width={24} height={24} />{' '}
              {user.totalBadge}{' '}
              <Box ml={1} as="img" src={honeypot1} width={24} height={24} />
            </Box>
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
