import React from 'react'
import useSound from 'use-sound'
import clickSfx from '../../assets/sounds/button-click.wav'
import useSetting from '../../hooks/useSetting'

const MAX_SIZE = '3em'

export default function Icon(props) {
  const { img, onClick, style } = props
  const { mute } = useSetting()
  const [clickSound] = useSound(clickSfx, {
    soundEnabled: !mute,
  })

  return (
    <img
      src={img}
      onClick={() => {
        if (onClick) {
          clickSound()
          onClick()
        }
      }}
      style={{ maxWidth: MAX_SIZE, cursor: 'pointer', ...style }}
      alt="Icon button"
    />
  )
}
