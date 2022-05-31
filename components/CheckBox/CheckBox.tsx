import React from "react";
import { CheckBoxProps } from "./CheckBox.types";
import CheckIcon from "../../public/svgs/check-icon";
import { Box, Container, Text } from "./CheckBox.styles";

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onClick, text }) => {
  return (
    <Container onClick={onClick}>
      <Box>{checked ? <CheckIcon /> : null}</Box>
      <Text>{text}</Text>
    </Container>
  );
};

export default CheckBox;
