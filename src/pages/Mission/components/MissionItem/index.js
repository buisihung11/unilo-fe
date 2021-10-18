import React from 'react'
import { MissionItemWrapper, MissionItemContent } from './MissionItem.style'
import itemBg from '../../../../assets/images/item.png'

export default function MissionItem(props) {
  return (
    <MissionItemWrapper>
      <img src={itemBg} width="100%" />
      <MissionItemContent>{props.children}</MissionItemContent>
    </MissionItemWrapper>
  )
}
