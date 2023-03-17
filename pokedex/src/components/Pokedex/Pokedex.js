import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DefaultContainer } from "./styled";
import PokedexVazia from "../../assets/PokedexVazia.png";

export function Pokedex({
  myPokedex,
  setMyPokedex,
  showOverlay,
  setShowOverlay,
}) {
  // Ordenar lista
  const orderById = (state, nextState) => {
    if (state.id < nextState.id) {
      return -1;
    } else if (state.id > nextState.id) {
      return 1;
    } else {
      return 0;
    }
  };

  // Verificar Poke
  const location = useLocation();
  let alreadyCaptured = false;
  if (location.pathname === `/pokedex/`) {
    alreadyCaptured = false;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Flex direction="column" flex="1">
      {showOverlay && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="blackAlpha.700"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="overlay"
        >
          <Box
            w="451px"
            h="222px"
            //
            bg="white"
            color="black"
            p={4}
            borderRadius="12px"
            boxShadow="lg"
            //
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="b" fontSize="48px">
              {alreadyCaptured ? "Gotcha!" : "Oh, no!"}
            </Text>
            <Text fontSize="16px">
              {alreadyCaptured
                ? "O Pokémon foi adicionado a sua Pokédex"
                : "O Pokémon foi removido da sua Pokédex"}
            </Text>
          </Box>
        </Box>
      )}
      <Header />
      <Flex
        minH="100vh"
        //
        direction="column"
        alignItems="center"
        //
        bg="#605c5c"
      >
        <Flex
          w="99vw"
          //
          px="40px"
          py="50px"
          //
          alignItems="center"
          /*
          bg="#605c5c"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pt="56px"
          px="40px"
          width="100vw"
          */
        >
          {myPokedex.length ? (
            <Text
              color="white"
              fontSize="48px"
              as="b"
              //   position="absolute"
              //   left="40px"
            >
              Meus Pokémons
            </Text>
          ) : (
            <Flex w="100%" justifyContent="center">
              <Img src={PokedexVazia} />
            </Flex>
          )}
        </Flex>
        <Flex
          pb="50px"
          columnGap="50px"
          rowGap="10px"
          //
          flexWrap="wrap"
          justifyContent="center"
        >
          {myPokedex.sort(orderById).map(pokemon => {
            {
              return (
                <Card
                  key={pokemon.id}
                  name={pokemon.name}
                  myPokedex={myPokedex}
                  setMyPokedex={setMyPokedex}
                  showOverlay={showOverlay}
                  setShowOverlay={setShowOverlay}
                />
              );
            }
          })}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
