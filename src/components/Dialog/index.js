import React, { useState } from "react";
import PropTypes from "prop-types";
import dialog from "../../assets/images/dialog.png";
import {
  DialogBackground,
  DialogContentWrapper,
  DialogContent,
  DialogOverlay,
  DialogWrapper,
} from "./Dialog.style";
import { Box } from "..";

const Dialog = (props) => {
  const { visible, onClose } = props;
  const [controlledVisible, setcontrolledVisible] = useState(visible);

  const visibleState = visible ?? controlledVisible;

  const onCloseHandler = () => {
    setcontrolledVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!visibleState) return null;

  return (
    <DialogWrapper>
      {/* DIALOG HEADER */}
      <DialogOverlay onClick={onCloseHandler} />
      <DialogContentWrapper>
        <DialogBackground src={dialog} />
        <DialogContent>Noi dung</DialogContent>
      </DialogContentWrapper>
    </DialogWrapper>
  );
};

Dialog.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

Dialog.defaultProps = {
  visible: false,
};

export default Dialog;
