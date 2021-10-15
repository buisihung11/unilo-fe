import React, { useState } from "react";
import { Box, Button, Dialog } from "../../components";
import { StyledUnilo, StyledUniloWrapper } from "../../components/styles/StyledUnilo";

const Demo = () => {
  const [showDialog, setshowDialog] = useState(false);
  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <Button onClick={() => setshowDialog(true)}>Show dialog</Button>
        <Dialog visible={showDialog} onClose={() => setshowDialog(false)} />
      </StyledUnilo>
    </StyledUniloWrapper>
  );
};

export default Demo;
