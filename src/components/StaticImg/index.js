import React from 'react'
import { Img } from 'react-image'

const StaticImg = ({ src, ...props }) => {
  return <Img src={`${process.env.PUBLIC_URL}/${src}`} {...props} />
}

export default StaticImg
