import React from 'react'
import { useHistory } from 'react-router'
import {
  StyledUniloWrapper,
  OverlayView,
  Header,
  SimpleTable,
  Button,
  ExpandableItem,
} from '../../components'

export default function MissionDetail(props) {
  const history = useHistory()
  const { description, conditionToJoin, tutorial, name, startDate, endDate } =
    history.location.state

  const descriptions = [
    {
      key: 'Phần thưởng',
      value: '10 hạt dẻ',
    },
    { key: 'Mô tả', value: description },
    { key: 'Hướng dẫn', value: tutorial },
    { key: 'Điều kiện tham gia', value: conditionToJoin },
  ]

  const content = descriptions.map(({ key, value }, i) => (
    <ExpandableItem key={key} label={key} isShown={i === 0}>
      {value}
    </ExpandableItem>
  ))

  return (
    <StyledUniloWrapper>
      <OverlayView>
        <Header style={{ flex: 1 }} />
        <SimpleTable style={{ flex: 5 }} title="Chi tiết">
          <div style={{ width: '100%' }}>
            <h4>{name || 'Mission Name'}</h4>
            <p>
              <small>
                ({startDate || 'dd/mm/yyyy'} - {endDate || 'dd/mm/yyyy'})
              </small>
            </p>
            {content}
          </div>
        </SimpleTable>
        <Button variant="primary">
          <h4 style={{ margin: 0 }}>Thực hiện</h4>
        </Button>
      </OverlayView>
    </StyledUniloWrapper>
  )
}
