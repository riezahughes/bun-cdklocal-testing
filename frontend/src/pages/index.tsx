import Headline from "@/components/Headline";
import { Grid, GridItem, Button, useDisclosure } from "@chakra-ui/react";
import InputForm from "@/modules/InputForm";
import ModalComponent from "@/components/ModalComponent";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalSuccess = () => {
    alert("I DID IT");
    onClose();
  };
  return (
    <>
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        onSuccess={handleModalSuccess}
      >
        <InputForm />
      </ModalComponent>
      <Headline>The Classic TODO List!</Headline>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={5}>
          <Button onClick={onOpen}>Add New</Button>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} bg="tomato">
          <span>Heres the navigation</span>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <span>Heres card 1</span>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <span>Heres card 2</span>
        </GridItem>
        <GridItem colSpan={4} bg="tomato">
          Heres a simple footer
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
