import Headline from "@/components/Headline";
import Sidebar from "@/modules/Sidebar";
import Footer from "@/modules/Footer";
import {
  Grid,
  GridItem,
  Button,
  useDisclosure,
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";
import InputForm from "@/modules/InputForm";
import ModalComponent from "@/components/ModalComponent";
import CardComponent from "@/components/CardComponent";
import CardContainer from "@/modules/CardContainer";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction="column" minHeight="100vh">
        <Box flex="1">
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={5}>
              <Headline>The Classic TODO List!</Headline>
            </GridItem>
            <GridItem colSpan={5}>
              <InputForm />
            </GridItem>
            <GridItem colSpan={4}>
              <CardContainer />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <Center>
            <Footer />
          </Center>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
