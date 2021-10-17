import React from 'react'
import { BannerWrapper, BannerImage, BannerSubtitle } from './Banner.style'

const DEFAULT_IMG =
  'https://s3-alpha-sig.figma.com/img/a4da/f909/12e1a76502e986927f48dc1f3900e450?Expires=1635120000&Signature=GF3ii1oeS-ZU6S8u8HPxTGi1zGKgmJ-6zJvkOzcyBDI7HHxgjOUWkCpsFfpDCWORx1WugupXVPbylKulQ6Zvq3lKXd3g4SrbK2ahZdDIPUkXK9NTc9BxXCLco6NJAOQ-MSofG5~WnLHBZqfK4K8t54mbUfHSqhwKUmNjJHbZcfAu0zEYGMMAQHEpPY7wLtVepx~ReixXHHSy5I5Ck8kmLpw69M0qNONkWQcQIu51AV6fLaAGpt1nEGxGdpoX0HvCpxIGZJZeZ-HOs9sY3SnI7YF4dokdL~a1m~KRgkl1jzH0BKHPWG2Bn9nzJZVPXUauX5kuBdeQXsHKz0r3slwOXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

export default function Banner(props) {
  const { img, subtitle } = props
  return (
    <BannerWrapper>
      <BannerImage src={img || DEFAULT_IMG} />
      {subtitle ? <BannerSubtitle>{subtitle}</BannerSubtitle> : ''}
    </BannerWrapper>
  )
}
