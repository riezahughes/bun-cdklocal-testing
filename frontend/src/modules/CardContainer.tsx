import { Box, Flex } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";
import { ListContext } from "@/store/lists.store";
import { useContext } from "react";

const CardContainer = () => {
  const list = useContext(ListContext);
  return (
    <Flex flexWrap="wrap" justifyContent="flex-start">
      {list?.list &&
        list?.list.map((listItem, index) => {
          return (
            <>
              <CardComponent key={`${list}-${index}`} item={listItem} />
            </>
          );
        })}
    </Flex>
  );
};

export default CardContainer;
