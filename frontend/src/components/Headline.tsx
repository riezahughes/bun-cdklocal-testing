import { Center } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Headline = ({ children }: PropsWithChildren) => {
  return (
    <Center
      bg="black"
      w="100%"
      p="20px 0px"
      color="white"
      fontSize="2em"
      fontWeight="bold"
      textTransform="capitalize"
    >
      {children}
    </Center>
  );
};

export default Headline;
