import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'
import useSound from 'use-sound'
import clickSfx from '../../assets/sounds/button-click.wav'
import useSetting from '../../hooks/useSetting'
import { StyledButton } from './Button.style'

const Button = (props) => {
  const { mute } = useSetting()
  const [onPlaySound] = useSound(clickSfx, {
    soundEnabled: !mute,
  })

  const { variant, onClick, ...others } = props

  const onClickHandler = () => {
    if (onClick) {
      onPlaySound()
      onClick()
    }
  }

  return (
    <StyledButton variant={variant} {...others} onClick={onClickHandler}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'danger']),
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.fontWeight,
  ...propTypes.fontSize,
}

Button.defaultProps = {
  variant: 'default',
}

export default Button
