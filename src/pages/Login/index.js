import React, { useState } from 'react'
import { Box, Button, StyledUniloWrapper } from '../../components'
import { StyledUniloBackground } from '../../components/AppStyles'
import Text from '../../components/Text'
import { Input, LoginWrapper, WelcomeBear } from './Login.style'

// IMAGES
import welcomeBear from '../../assets/images/welcome-bear.png'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'axios'
import { useHistory } from 'react-router'
import axiosClient from '../../utils/axios'

const LoginPage = () => {
  const queryClient = useQueryClient()
  const history = useHistory()

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  const { mutate: login } = useMutation(
    () => {
      return axiosClient.post(`/customers/login`, {
        email: username,
        password,
      })
    },
    {
      onError: (res) => {
        if (res.response?.data?.status === 401) {
          setError('Sai tên đăng nhập')
        }
      },
      onSuccess: async (res) => {
        console.log(`res`, res)
        const token = res.jwtToken
        const userId = res.customer.id
        localStorage.setItem('user_id', userId)
        localStorage.setItem('access_token', token)
        await queryClient.invalidateQueries(['user', userId, 'profile', token])
        history.push('/dashboard')
      },
    }
  )

  const onSubmitHandler = () => {
    if (!username) {
      console.log(`missingusername`)
      setError('Vui lòng nhập tên đăng nhập')
      return
    }
    if (!password) {
      setError('Vui lòng nhập mật khẩu')
      return
    }
    setError(null)
    login()
  }

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <LoginWrapper>
        <Text fontWeight="bold" fontSize="2rem">
          Chào bạn đến với ACB
        </Text>
        <Box py={4}>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Tên đăng nhập"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
          />
          <Text pt={2} fontWeight="bold" color="red" textAlign="right">
            {error}
          </Text>
        </Box>
        <Button onClick={onSubmitHandler} width="100%">
          Đăng nhập
        </Button>
        <WelcomeBear src={welcomeBear} />
      </LoginWrapper>
    </StyledUniloWrapper>
  )
}

export default LoginPage
