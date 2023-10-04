import { Dispatch, SetStateAction, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  DarkModeContext,
  DarkModeInitialState,
  TDarkModeType,
} from "@/store/darkmode.store";
import { ListContext, ListInitialState, TListType } from "@/store/lists.store";

const MyApp = ({ Component, pageProps }: any) => {
  const [darkMode, setDarkMode] = useState(DarkModeInitialState);
  const [list, setList] = useState(ListInitialState);

  const darkModeValue: TDarkModeType = {
    darkMode,
    setDarkMode,
  };

  const listValue: TListType = {
    list,
    setList,
  };
  return (
    <DarkModeContext.Provider value={darkModeValue}>
      <ChakraProvider>
        <ListContext.Provider value={listValue}>
          <Component {...pageProps} />
        </ListContext.Provider>
      </ChakraProvider>
    </DarkModeContext.Provider>
  );
};

export default MyApp;
