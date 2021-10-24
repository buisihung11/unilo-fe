import React from 'react'
import { Box, Button } from '..'
import Text from '../Text'
import Dialog from './index'

const ErrorDialog = ({ visible, onClose, errorMsg }) => {
  return (
    <Dialog
      headerTitle="Lỗi"
      footer={<Button onClick={onClose}>Quay lại</Button>}
      visible={visible}
      onClose={onClose}
    >
      <Box>
        <Text>{errorMsg}</Text>
      </Box>
    </Dialog>
  )
}

export default ErrorDialog
