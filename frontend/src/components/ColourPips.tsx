import { Button } from "@chakra-ui/react";

interface IColourPip {
  selected: boolean;
  colour: string;
  onClick: (colour: string) => void;
}

const ColourPip = ({ selected, colour, onClick }: IColourPip) => {
  return (
    <Button
      w="20px"
      h="20px"
      p="0"
      m="0"
      bg={colour}
      borderRadius="5px"
      border={selected ? "3px solid lightblue" : "1px solid lightgrey"}
      onClick={() => onClick(colour)}
    />
  );
};

export default ColourPip;
