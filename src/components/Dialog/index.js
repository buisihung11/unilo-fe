import PropTypes from 'prop-types'
import React, { useState } from 'react'
import dialog from '../../assets/images/DialogWrapper.png'
import {
  DialogBackground,
  DialogContent,
  DialogContentWrapper,
  DialogExtraHeader,
  DialogFooterWrapper,
  DialogHeader,
  DialogOverlay,
  DialogWrapper,
} from './Dialog.style'

const Dialog = (props) => {
  const { visible, onClose, headerTitle, footer, children, extraHeader } = props
  const [controlledVisible, setcontrolledVisible] = useState(visible)

  const visibleState = visible ?? controlledVisible

  const onCloseHandler = () => {
    setcontrolledVisible(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    <DialogWrapper visible={visibleState}>
      <DialogOverlay onClick={onCloseHandler} />
      <DialogContentWrapper>
        <DialogHeader>{headerTitle}</DialogHeader>
        <DialogExtraHeader  >{extraHeader}</DialogExtraHeader>
        <DialogBackground src={dialog} />
        <DialogContent>{children}</DialogContent>
        <DialogFooterWrapper>{footer}</DialogFooterWrapper>
      </DialogContentWrapper>
    </DialogWrapper>
  )
}

Dialog.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  headerTitle: PropTypes.element,
  footer: PropTypes.element,
  extraHeader: PropTypes.element,
}

Dialog.defaultProps = {
  visible: false,
}

export default Dialog
