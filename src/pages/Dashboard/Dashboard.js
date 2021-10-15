import React from "react";
import { Box } from "../../components";
import Button from "../../components/Button";
import {
  StyledUnilo,
  StyledUniloWrapper,
} from "../../components/styles/StyledUnilo";

export default function Dashboard(props) {
  return (
    <StyledUniloWrapper>
      <StyledUnilo>
        <Button
          onClick={() => console.log("Hello")}
          color="white"
          fontWeight="bold"
          m={2}
          variant="primary"
        >
          Noi dung
        </Button>
        <Box bg="red" m={2} p={4}>
          Test box
        </Box>
      </StyledUnilo>
    </StyledUniloWrapper>
  );
}
