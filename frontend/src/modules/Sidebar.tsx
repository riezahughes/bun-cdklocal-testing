import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ListContext } from "@/store/lists.store";
import { useContext } from "react";

const Sidebar = () => {
  const list = useContext(ListContext);
  return (
    <Box w="100%">
      <Grid>
        <GridItem>
          <h1>Sidebar!</h1>
        </GridItem>
        <GridItem>
          <ul>
            {list?.list &&
              list?.list.map((listItem, index) => {
                return <li key={listItem.id}>{listItem.title}</li>;
              })}
          </ul>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Sidebar;
