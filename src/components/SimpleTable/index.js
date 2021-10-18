import React from 'react'
import {
  TabWrapper,
  TabContent,
  Mascot,
  TableContent,
  TableWrapper,
} from './SimpleTable.style'
import tab from '../../assets/images/tab.png'
import tbl from '../../assets/images/tbl-simple.png'
import mascot from '../../assets/icons/bear-1.png'

export default function SimpleTable(props) {
  return (
    <div style={{ ...props.style, paddingTop: '10%' }}>
      <TabWrapper>
        <img src={tab} width="100%" />
        <TabContent>{props.title || 'Title'}</TabContent>
      </TabWrapper>
      <Mascot icon={props.mascot || mascot} />
      <TableWrapper>
        <img src={tbl} width="100%" />
        <TableContent>{props.children}</TableContent>
      </TableWrapper>
    </div>
  )
}
