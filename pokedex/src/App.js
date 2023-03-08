import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <ChakraProvider resetCSS>
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
