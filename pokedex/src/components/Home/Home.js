import { Box, ChakraProvider, Flex, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScrollTop from "../../utils/ScrollTop";
import Card from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { PokedexDisplay, SelectDisplay, Titulo } from "./styled";

export function Home({ myPokedex, setMyPokedex, showOverlay, setShowOverlay }) {
  //Estado para puxar lista de Pokemons da API
  const [pokeGen, setPokeGen] = useState([]);

  // Estado para filtro por gen
  const [genSelect, setGenSelect] = useState("");

  // Primeiro load da página
  useEffect(() => {
    getPokemonsList(1);
  }, []);

  const getPokemonsList = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokedex/1/`);
      setPokeGen(response.data.pokemon_entries);
    } catch (error) {
      console.log(error.response);
    }
  };

  // Verificar Poke
  const location = useLocation();
  let alreadyCaptured = false;
  if (location.pathname === `/`) {
    alreadyCaptured = true;
  }

  // Display Principal
  let displayMessage = "";

  switch (genSelect) {
    case "Gen1":
      displayMessage = "Pokédex de Kanto";
      break;
    case "Gen2":
      displayMessage = "Pokédex de Johto";
      break;
    case "Gen3":
      displayMessage = "Pokédex de Hoenn";
      break;
    case "Gen4":
      displayMessage = "Pokédex de Sinnoh";
      break;
    case "Gen5":
      displayMessage = "Pokédex de Unova";
      break;
    case "Gen6":
      displayMessage = "Pokédex de Kalos";
      break;
    case "Gen7":
      displayMessage = "Pokédex de Alola";
      break;
    case "Gen8":
      displayMessage = "Pokédex de Galar";
      break;
    case "Gen9":
      displayMessage = "Pokédex de Paldea";
      break;
    default:
      displayMessage = "Todos os Pokémons";
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////
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
          justifyContent="space-between"
        >
          <Text color="white" alignSelf="start" fontSize="48px" as="b">
            {displayMessage}
          </Text>
          <Select
            placeholder="Selecione a Pokédex"
            value={genSelect}
            onChange={e => setGenSelect(e.target.value)}
            w="20rem"
            bg="white"
          >
            <option value="Gen1">Kanto</option>
            <option value="Gen2">Johto</option>
            <option value="Gen3">Hoenn</option>
            <option value="Gen4">Sinnoh</option>
            <option value="Gen5">Unova</option>
            <option value="Gen6">Kalos</option>
            <option value="Gen7">Alola</option>
            <option value="Gen8">Galar</option>
            <option value="Gen9">Paldea</option>
          </Select>
        </Flex>
        <ScrollTop />
        <Flex
          pb="50px"
          columnGap="50px"
          rowGap="10px"
          //
          flexWrap="wrap"
          justifyContent="center"
        >
          {pokeGen
            .filter(pokemon => {
              if (genSelect === "Gen1") {
                return pokemon.entry_number >= 0 && pokemon.entry_number <= 151;
              } else if (genSelect === "Gen2") {
                return (
                  pokemon.entry_number >= 152 && pokemon.entry_number <= 251
                );
              } else if (genSelect === "Gen3") {
                return (
                  pokemon.entry_number >= 252 && pokemon.entry_number <= 386
                );
              } else if (genSelect === "Gen4") {
                return (
                  pokemon.entry_number >= 387 && pokemon.entry_number <= 493
                );
              } else if (genSelect === "Gen5") {
                return (
                  pokemon.entry_number >= 494 && pokemon.entry_number <= 649
                );
              } else if (genSelect === "Gen6") {
                return (
                  pokemon.entry_number >= 650 && pokemon.entry_number <= 721
                );
              } else if (genSelect === "Gen7") {
                return (
                  pokemon.entry_number >= 722 && pokemon.entry_number <= 809
                );
              } else if (genSelect === "Gen8") {
                return (
                  pokemon.entry_number >= 810 && pokemon.entry_number <= 905
                );
              } else if (genSelect === "Gen9") {
                return (
                  pokemon.entry_number >= 906 && pokemon.entry_number <= 1010
                );
              } else if (genSelect === "") {
                return pokemon.entry_number >= 0 && pokemon.entry_number <= 22;
              }
            })
            .map(pokemon => {
              {
                return (
                  <Card
                    key={pokemon.pokemon_species.url}
                    name={pokemon.pokemon_species.name}
                    url={pokemon.pokemon_species.url}
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
