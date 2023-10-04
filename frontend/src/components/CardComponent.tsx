import {
  Card,
  CardHeader,
  CardBody,
  ButtonGroup,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";

import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

import { ListContext, TItem } from "@/store/lists.store";
import { useContext } from "react";

interface ICardComponent {
  item: TItem;
}

const CardComponent = ({ item }: ICardComponent) => {
  const list = useContext(ListContext);
  const toast = useToast();

  const handleDelete = (index: number) => {
    const clone = list?.list || [];
    const results =
      clone &&
      clone?.filter((listItem) => {
        return listItem.id !== index;
      });
    list?.setList(results);
    console.log("Deleted");
    toast({
      title: "Note Deleted.",
      description: "We've deleted your note.",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
    return;
  };

  const handleToggle = (index: number) => {
    const updatedArray = list?.list.map((item) => {
      if (item.id === index) {
        // Return a new object with the 'complete' property toggled
        return { ...item, complete: !item.complete };
      }
      // Return the original item if the id doesn't match
      return item;
    });
    if (!updatedArray) return;
    list?.setList(updatedArray);
    toast({
      title: "Updated",
      description: "Completion status updated",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Card w="23%" mb={10} bg={item?.bgColour} color={item?.textColour}>
      <CardHeader>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          textDecoration={item?.complete ? "line-through" : "inherit"}
        >
          {item?.title ? (
            <>
              <strong>{item?.title}</strong>
            </>
          ) : (
            <></>
          )}
          <ButtonGroup>
            <Button
              color={item?.complete ? "green" : "grey"}
              opacity={item?.complete ? "1" : "0.5"}
              onClick={() => handleToggle(item?.id)}
            >
              <AiFillCheckCircle />
            </Button>
            <Button onClick={() => handleDelete(item?.id)}>
              <AiFillDelete />
            </Button>
          </ButtonGroup>
        </Flex>
      </CardHeader>
      <CardBody textDecoration={item?.complete ? "line-through" : "inherit"}>
        {item?.message}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
