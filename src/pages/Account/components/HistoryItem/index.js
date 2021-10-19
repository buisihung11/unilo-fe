import React from 'react'
import { HistoryItemWrapper, HistoryItemContent } from './HistoryItem.style'
import itemBg from '../../../../assets/images/item-lg.png'

export default function HistoryItem(props) {
  return (
    <HistoryItemWrapper>
      <img src={itemBg} width="100%" />
      <HistoryItemContent>{props.children}</HistoryItemContent>
    </HistoryItemWrapper>
  )
}
