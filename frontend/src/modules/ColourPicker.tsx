import { useState } from "react";
import styled from "@emotion/styled";
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

interface IColourPicker {
  name: string;
}

const ColourPicker = ({ name }: IColourPicker) => {
  const [currentColour, setCurrentColour] = useState("FFFFFF");

  const handleColourChange = (event: any) => {
    setCurrentColour(event?.target?.value);
  };

  const ColourHolder = styled.div`
    width: 45px;
    background-color: #${currentColour};
    border-radius: 50%;
    border: 2px solid grey;
  `;
  return (
    <Stack>
      <InputGroup>
        <ColourHolder />
        <InputLeftAddon>#</InputLeftAddon>
        <Input
          name={name}
          prefix="#"
          defaultValue={currentColour}
          onChange={(e) => handleColourChange(e)}
          textTransform="uppercase"
        />
      </InputGroup>
    </Stack>
  );
};

export default ColourPicker;
