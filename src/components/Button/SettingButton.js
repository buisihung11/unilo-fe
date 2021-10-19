import React from 'react'
import settingIcon from '../../assets/icons/setting-icon.png'
import { StyledBackgroundButton } from './Button.style'

export default function SettingButton(props) {
  return <StyledBackgroundButton image={settingIcon} {...props} />
}
