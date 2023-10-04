import { CreateItemSchema, CreateItemSchemaType } from "@/schemas/CreateItem";
import { Box, IconButton, Flex, Input, Textarea } from "@chakra-ui/react";
import {
  AiOutlinePlusCircle,
  AiOutlineFontColors,
  AiOutlineBgColors,
} from "react-icons/ai";
import styled from "@emotion/styled";
import ColourPicker from "./ColourPicker";

const InputForm = () => {
  return (
    <Box w="50%">
      <Flex justifyItems="center">
        <Input name="title" placeholder="Enter a Title" />
        <Input name="description" placeholder="Enter a description" />
        <Box>
          <AiOutlineFontColors />
          <ColourPicker
            name="textColour"
            colourList={["#FFFFFF", "#000000", "#aa0000", "#00aa00", "#0000aa"]}
          />
        </Box>
        <Box>
          <AiOutlineBgColors />
          <ColourPicker
            name="backgroundColour"
            colourList={["#FFFFFF", "#000000", "#aa0000", "#00aa00", "#0000aa"]}
          />
        </Box>
        <IconButton
          aria-label="Add New Note"
          onClick={() => console.log("ree")}
          icon={<AiOutlinePlusCircle />}
        />
      </Flex>
    </Box>
  );
};

export default InputForm;
