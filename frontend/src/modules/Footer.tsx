import { Flex } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Flex direction="row" align="center" columnGap="5px">
      <a href="https://github.com/riezahughes">riezahughes</a>
      <a href="https://github.com/riezahughes">
        <AiFillGithub />
      </a>
    </Flex>
  );
};

export default Footer;
