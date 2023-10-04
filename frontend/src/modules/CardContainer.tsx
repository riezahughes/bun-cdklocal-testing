import { Flex } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import { ListContext } from "@/store/lists.store";
import { useContext } from "react";

const CardContainer = () => {
  const list = useContext(ListContext);
  return (
    <Flex gap="20px">
      {list?.list &&
        list?.list.map((listItem, index) => {
          return (
            <CardComponent
              key={`${list}-${index}`}
              item={listItem}
              header={listItem.title}
              body={listItem.body}
            />
          );
        })}
    </Flex>
  );
};

export default CardContainer;
