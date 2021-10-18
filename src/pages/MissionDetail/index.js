import React from 'react'
import {
  StyledUniloWrapper,
  OverlayView,
  Header,
  SimpleTable,
  Button,
  ExpandableItem,
} from '../../components'

export default function MissionDetail(props) {
  let { name, descriptions, startDate, expirationDate } = props
  descriptions = [
    {
      key: 'Phần thưởng',
      value: '10 hạt dẻ',
    },
    { key: 'Mô tả', value: undefined },
    { key: 'Hướng dẫn', value: undefined },
    { key: 'Điều kiện tham gia', value: undefined },
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
                ({startDate || 'dd/mm/yyyy'} - {expirationDate || 'dd/mm/yyyy'})
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
