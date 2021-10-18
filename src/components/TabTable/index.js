import React, { useState } from 'react'
import {
  TabWrapper,
  TabContent,
  ClickableTabContent,
  TableContent,
  TableWrapper,
} from './TabTable.style'
import tab from '../../assets/images/tab.png'
import tabOverlay from '../../assets/images/tab-overlay.png'
import tbl from '../../assets/images/tbl-tab.png'

export default function TabTable(props) {
  const [tabIndex, setTabIndex] = useState(0)

  const { title1, title2, clickHandler1, clickHandler2 } = props

  const clickedOnTab = (index) => {
    if (!clickHandler1 || !clickHandler2) {
      return
    }
    setTabIndex(index)
    const action = tabIndex ? clickHandler2 : clickHandler1
    action()
  }

  return (
    <div style={{ ...props.style, paddingTop: '10%' }}>
      <div style={{ display: 'flex' }}>
        <TabWrapper
          style={{ zIndex: tabIndex === 0 ? 3 : 1 }}
          onClick={() => clickedOnTab(0)}
        >
          <img src={tabIndex === 0 ? tab : tabOverlay} width="100%" />
          {!clickHandler1 ? (
            <TabContent>{title1 || 'Title'}</TabContent>
          ) : (
            <ClickableTabContent>{title1 || 'Title'}</ClickableTabContent>
          )}
        </TabWrapper>
        {title2 && clickHandler2 ? (
          <TabWrapper
            style={{ margin: '0 4% 0 0', zIndex: tabIndex === 1 ? 3 : 1 }}
            onClick={() => clickedOnTab(1)}
          >
            <img src={tabIndex === 1 ? tab : tabOverlay} width="100%" />
            <ClickableTabContent>{title2}</ClickableTabContent>
          </TabWrapper>
        ) : (
          ''
        )}
      </div>
      <TableWrapper>
        <img src={tbl} width="100%" />
        <TableContent>{props.children}</TableContent>
      </TableWrapper>
    </div>
  )
}
