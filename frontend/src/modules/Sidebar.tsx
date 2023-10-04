import { Box, Grid, GridItem } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w="100%">
      <Grid>
        <GridItem>
          <h1>Sidebar!</h1>
        </GridItem>
        <GridItem>
          <ul>
            {[{ test: 1 }, { test: 2 }, { test: 3 }].map((listItem, index) => {
              return <li key={index}>{listItem.test}</li>;
            })}
          </ul>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Sidebar;
