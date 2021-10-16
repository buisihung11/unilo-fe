import React from 'react'

const MAX_SIZE = '3em'

export default function Icon(props) {
  const { img, onClick, style } = props
  return (
    <img src={img} onClick={onClick} style={{ maxWidth: MAX_SIZE, ...style }} />
  )
}
