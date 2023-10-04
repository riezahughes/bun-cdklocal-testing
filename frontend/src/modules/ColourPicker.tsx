import { useEffect, useState } from "react";
import ColourPip from "@/components/ColourPips";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

interface IColourPicker {
  name: string;
  colourList: Array<string>;
  setValue: any;
  defaultValue: string;
}

const ColourPicker = ({
  name,
  colourList,
  setValue,
  defaultValue,
}: IColourPicker) => {
  const [currentColour, setCurrentColour] = useState(defaultValue);

  const handleColourChange = (colour: any) => {
    setCurrentColour(colour);
    setValue(name, colour);
  };

  return (
    <Box>
      <Flex>
        {colourList.map((colour, index) => {
          return (
            <ColourPip
              key={`colpick-${name}-${colour}-${index}`}
              colour={colour}
              onClick={handleColourChange}
              selected={colour === currentColour}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default ColourPicker;
