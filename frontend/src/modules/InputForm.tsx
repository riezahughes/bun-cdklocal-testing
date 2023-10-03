import { CreateItemSchema, CreateItemSchemaType } from "@/schemas/CreateItem";
import { Button, Input, Textarea } from "@chakra-ui/react";
import styled from "@emotion/styled";
import ColourPicker from "./ColourPicker";

const StyledForm = styled.form`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;

const InputForm = () => {
  return (
    <StyledForm>
      <Input name="title" placeholder="Enter a Title" />
      <Textarea name="description" placeholder="Enter a description" />
      <ColourPicker name="colour" />
      <Button>Create</Button>
    </StyledForm>
  );
};

export default InputForm;
