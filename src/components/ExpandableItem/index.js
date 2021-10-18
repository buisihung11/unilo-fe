import React, { useState, useEffect } from 'react'
import { Box } from '..'
import DashedLine from '../DashedLine'
import Text from '../Text'
import { LabelWrapper, DescriptionWrapper } from './ExpandableItem.style'

const DEFAULT_LABEL = 'Tiêu đề'
const DEFAULT_DESCRIPTION = 'Không có nội dung'

export default function ExpandableItem(props) {
  const [hidden, setHidden] = useState(!props.isShown)
  return (
    <div>
      <LabelWrapper onClick={() => setHidden(!hidden)}>
        <h6 style={{ margin: 0 }}># {props.label || DEFAULT_LABEL}</h6>
        <i className={`fas fa-angle-${hidden ? 'down' : 'up'}`}></i>
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

export function ExpandableItemWithImage(props) {
  const [hidden, setHidden] = useState(!props.isShown)

  console.log(props.isShown)

  return (
    <div>
      <LabelWrapper onClick={() => setHidden(!hidden)}>
        <Text fontSize={'0.7rem'} fontWeight={'bold'} style={{ margin: 0 }}>
          {props.no}) {props.label || DEFAULT_LABEL}
        </Text>
        <i className={`fas fa-angle-${hidden ? 'down' : 'up'}`}></i>
      </LabelWrapper>
      {!hidden ? (
        <Box display="flex" flexDirection="column">
          <img
            src={props.img}
            width="100px"
            style={{ margin: '0 auto', paddingTop: '10px' }}
          />
          <DescriptionWrapper
            style={{ textAlign: 'center', paddingTop: '5px' }}
          >
            {props.children || DEFAULT_DESCRIPTION}
          </DescriptionWrapper>
        </Box>
      ) : (
        ''
      )}
      <DashedLine />
    </div>
  )
}
