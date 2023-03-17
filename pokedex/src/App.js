import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import { Router } from "./routes/Router";

function App() {
  return (
    <ChakraProvider resetCSS>
      <GlobalStyled />
      <Router />
    </ChakraProvider>
  );
}

export default App;
