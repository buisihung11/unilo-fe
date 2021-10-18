import React, { useState } from "react";
import { Box, Button, Dialog } from "../../components";
import {
  StyledUnilo,
  StyledUniloWrapper,
} from "../../components/styles/StyledUnilo";
import Text from "../../components/Text";
import Wheel from "../../components/Wheel";

const Demo = () => {
  const [showDialog, setshowDialog] = useState(false);
  const [rotate, setRotate] = useState(false);

  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <Button onClick={() => setshowDialog(true)}>Show dialog</Button>
        <Button onClick={() => setRotate(true)}>Start Rotate</Button>
        <Wheel isRotate={rotate} deg={5000} />
        <Dialog
          visible={showDialog}
          onClose={() => setshowDialog(false)}
          headerTitle={
            <Text
              as='h1'
              fontWeight='bold'
              fontSize={2}
              color='#fff'
            >
              Thông báo
            </Text>
          }
          footer={
            <Box position='absolute' mx='auto'>
              <Button onClick={() => setshowDialog(false)}>
                Nhận quà
              </Button>
            </Box>
          }
        >
          lorem
        </Dialog>
      </StyledUnilo>
    </StyledUniloWrapper>
  )
}

export default Demo
