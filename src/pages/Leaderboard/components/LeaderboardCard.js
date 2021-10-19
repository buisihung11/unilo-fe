import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../../components'
import Text from '../../../components/Text'
import styled from 'styled-components'
import { space, typography } from 'styled-system'
import nutImage from '../../../assets/icons/nut.png'
import honeypot1 from '../../../assets/icons/honeypot1.png'
import { Avatar, UserName } from './Leaderboard.style'

const LeaderboardCard = ({ user }) => {
  const { avatar, userName, membership, totalNut, totalBadge } = user || {}
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar src={avatar} alt={userName} />
      <UserName pt={2} fontWeight="bold">
        {userName}
      </UserName>
      <Box py={1}>
        <Text>{membership}</Text>
      </Box>
      <Box p={2} bg="#235789" borderRadius="24px" color="white" display="flex">
        {totalNut} <Box ml={1} as="img" src={nutImage} width={24} height={24} />{' '}
        {totalBadge}{' '}
        <Box ml={1} as="img" src={honeypot1} width={24} height={24} />
      </Box>
    </Box>
  )
}

LeaderboardCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    userName: PropTypes.string,
    membership: PropTypes.string,
    totalNut: PropTypes.number,
    totalBadge: PropTypes.number,
  }),
}

export default LeaderboardCard
