import { Flex, Img } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import RocketTeam from "../../assets/TelaDeErro.png";
import { Footer } from "../Footer/Footer";

export function ErrorPage() {
  return (
    <Flex minH="100vh" direction="column">
      <Header />
      <Flex
      justifyContent="center"
    //   alignItems="center"
      //
      bg="#605c5c"
      w="100%"
      h="77vh"
      >
        <Img minW="500px" boxSize="500px" src={RocketTeam} />
      </Flex>
      <Footer/>
    </Flex>
  );
}
