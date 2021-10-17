import React, { useState } from 'react'
import DashedLine from '../DashedLine'
import { LabelWrapper, DescriptionWrapper } from './ExpandableItem.style'

const DEFAULT_LABEL = 'Tiêu đề'
const DEFAULT_DESCRIPTION = 'Không có nội dung'

export default function ExpandableItem(props) {
  const [hidden, setHidden] = useState(!props.isShown)
  return (
    <div>
      <LabelWrapper onClick={() => setHidden(!hidden)}>
        <h6 style={{ margin: 0 }}># {props.label || DEFAULT_LABEL}</h6>
        <i class={`fas fa-angle-${hidden ? 'down' : 'up'}`}></i>
      </LabelWrapper>
      {!hidden ? (
        <DescriptionWrapper>
          {props.children || DEFAULT_DESCRIPTION}
        </DescriptionWrapper>
      ) : (
        ''
      )}
      <DashedLine />
    </div>
  )
}
