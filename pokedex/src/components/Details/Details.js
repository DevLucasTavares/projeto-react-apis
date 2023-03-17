import { Box, Flex, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getPokecolors } from "../../utils/ReturnPokecolors";
import { getPoketypes } from "../../utils/ReturnPoketypes";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import pokeballBG from "../../assets/pokeballback.png";
import {
  DefaultContainer,
  DetailsBox,
  DetailsContainer,
  ImgFrontBox,
  ImgBackBox,
  NameBox,
  StatsBox,
  StatsName,
  StatsNumber,
  StatsValue,
  MovesBox,
} from "./styled";

export function Details({
  myPokedex,
  setMyPokedex,
  showOverlay,
  setShowOverlay,
}) {
  // Receber pokemon direcionado
  const params = useParams();
  // console.log(params.pokemon)

  // Receber pokemon
  const [pokemon, setPokemon] = useState("");
  // Receber infos adicionais do pokemon
  const [adcInfo, setAdcInfo] = useState("");

  // Estado para reload nos cards
  const [reloadCards, setReloadCards] = useState(true);

  // Carregar cards
  useEffect(() => {
    buscarPokemon();
  }, [reloadCards]);

  // Carregar pokemon na API
  const buscarPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemon}/`
      );
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Randomizar os moves
  const random = totalMoves => {
    return Math.floor(Math.random() * (totalMoves - 1) + 1);
  };

  // Colocar o 0 antes do ID
  const addZero = id => {
    if (id < 10) {
      return "0";
    } else if (id >= 10 && id < 100) {
      return "";
    }
  };

  // Somar os Stats
  const totalStats = stats => {
    let i = 0;
    let totalAmount = 0;
    while (i < stats.length - 1) {
      totalAmount = totalAmount + stats[i].base_stat;
      i++;
    }
    return totalAmount;
  };

  // Pegar infos adicionais
  // const buscarAdcInfo = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${pokemon.species.url}`
  //     );
  //     setAdcInfo(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // Carregar informacoes adicionais
  // useEffect(() => {
  //   buscarAdcInfo();
  // }, []);

  // Verificar Poke
  const location = useLocation();
  let alreadyCaptured = false;
  if (location.pathname === `/details/${params.pokemon}`) {
    alreadyCaptured = myPokedex.find(poke => {
      return poke.name === pokemon.name;
    });
  }

  const statsBarSize = size => {
    if (size > 165) {
      return size - 15;
    } else if (size > 120) {
      return size;
    } else if (size > 100) {
      return size;
    } else if (size > 60) {
      return size;
    } else if (size <= 20) {
      return size + 20;
    } else {
      return size;
    }
  };

  const statsBarColor = size => {
    if (size > 150) {
      return "#9645ff";
    } else if (size >= 100) {
      return "#4eff45";
    } else if (size > 60) {
      return "#ffdd69";
    } else if (size < 20) {
      return "#bd2424";
    } else {
      return "#ff7c2d";
    }
  };

  const statsNameChange = statname => {
    switch (statname) {
      case "hp":
        return "HP";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";

      default:
        return statname;
    }
  };

  const Moveset = () => {
    return (
      <Flex h="37px">
        <Text
          bg="#ECECEC"
          border="2px solid lightgray"
          borderRadius="12px"
          borderStyle="dotted"
          px="10px"
          py="5px"
          fontFamily="montserrat"
          textTransform="capitalize"
        >
          {pokemon.moves.length >= 4
            ? pokemon.moves[random(pokemon.moves.length)].move.name
            : pokemon.moves[0].move.name}
        </Text>
      </Flex>
    );
  };
  //////////////////////////////////////////////////////////////////////////////////////////////
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

      <Header
        pokemon={pokemon}
        myPokedex={myPokedex}
        setMyPokedex={setMyPokedex}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />

      <Flex
        h="100vh"
        //
        direction="column"
        alignItems="center"
        //
        bg="#605c5c"
        bgImage={pokeballBG}
        bgRepeat="no-repeat"
        bgSize="60vw"
        bgPosition="top"
      >
        <Flex
          w="99vw"
          //
          px="40px"
          py="50px"
          //
          alignItems="center"
        >
          <Text color="white" fontSize="48px" as="b">
            Detalhes
          </Text>
        </Flex>

        {pokemon !== "" ? (
          <Flex
            maxW="80%"
            // w="1389.14px"
            h="663px"
            //
            bg={getPokecolors(pokemon.types[0].type.name)}
            borderRadius="38px"
            pl="45"
            pr="300px"
            py="25"
            gap="50px"
            position="relative"
            //
            wrap="wrap"
          >
            <Img
              position="absolute"
              right="0"
              src={pokeballBG}
              top="0"
              w="770px"
            />

            <Box
              w="282px"
              h="100%"
              //
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                w="100%"
                h="50%"
                //
                bg="white"
                borderRadius="8px"
                mb="50px"
                //
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {!pokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default === false ? (
                  <Img
                    boxSize="40%"
                    src={
                      pokemon.sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                  />
                ) : (
                  <Img boxSize={"80%"} src={pokemon.sprites.front_default} />
                )}
              </Box>

              <Flex
                w="100%"
                h="50%"
                //
                bg="white"
                borderRadius="8px"
                //
                alignItems="center"
                justifyContent="center"
              >
                {!pokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.back_default === false ? (
                  <Img
                    boxSize={"40%"}
                    src={
                      pokemon.sprites.versions["generation-v"]["black-white"]
                        .animated.back_default
                    }
                  />
                ) : (
                  <Img boxSize={"80%"} src={pokemon.sprites.back_default} />
                )}
              </Flex>
            </Box>

            <Box
              w="343px"
              h="100%"
              //
              bg="white"
              borderRadius="12px"
              p="5px"
              //
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
            >
              <Flex
                w="100%"
                h="50px"
                //
                px="20px"
                alignItems="end"
              >
                <Text fontSize="24px" fontFamily="Inter" as="b">
                  Base stats
                </Text>
              </Flex>

              <Flex
                w="100%"
                h="240px"
                //
                rowGap="20px"
                columnGap="0"
                p="10px"
                //
                flexDirection="column"
                flexWrap="wrap"
              >
                <Flex
                  h="100%"
                  w="35%"
                  //
                  direction="column"
                  justifyContent="space-between"
                >
                  {pokemon.stats.map(index => {
                    return (
                      <Flex
                        key={index.stat.name}
                        //
                        fontSize="14px"
                        //
                        justifyContent="end"
                      >
                        <Text textTransform="capitalize">
                          {statsNameChange(index.stat.name)}
                        </Text>
                        <Text ml="22px" as="b">
                          {index.base_stat}
                        </Text>
                      </Flex>
                    );
                  })}
                </Flex>

                <Flex
                  h="100%"
                  w="45%"
                  //
                  py="7px"
                  //
                  direction="column"
                  justifyContent="space-between"
                >
                  {pokemon.stats.map(index => {
                    return (
                      <Flex
                        key={index.stat.name}
                        //
                        w={`${statsBarSize(index.base_stat)}px`}
                        h="11px"
                        //
                        bg={statsBarColor(index.base_stat)}
                        borderRadius="10px"
                      >
                        ㅤ
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
              <Text
                w="50%"
                h="30px"
                //
                ml="36px"
                fontSize="16px"
              >
                Total
                <Text ml="18px" as="b">
                  {totalStats(pokemon.stats)}
                </Text>
              </Text>
            </Box>

            <Flex
              h="100%"
              //
              gap="46px"
              // pr="300px"
              //
              flexDirection="column"
            >
              <Box
                color="white"
                //
                display="flex"
                flexDirection="column"
              >
                <Text h="10px" fontFamily="inter" as="b">
                  #{addZero(pokemon.id)}
                  {pokemon.id}
                </Text>
                <Text
                  fontSize="48px"
                  fontFamily="inter"
                  as="b"
                  textTransform="capitalize"
                >
                  {pokemon.name}
                </Text>
                <Flex gap="18px">
                  {pokemon.types.map(index => {
                    return (
                      <Img
                        key={index.type.name}
                        src={getPoketypes(index.type.name)}
                        alt={index.type.name}
                      />
                    );
                  })}
                </Flex>
              </Box>

              <Box
                h="100%"
                w="292px"
                //
                borderRadius="8px"
                p="18px"
                bg="white"
                gap="20px"
                //
                display="flex"
                flexDirection="column"
              >
                <Text color="black" fontFamily="inter" fontSize="24px" as="b">
                  Moves:
                </Text>
                {Moveset()}
                {pokemon.moves.length > 2 ? Moveset() : ""}
                {pokemon.moves.length > 3 ? Moveset() : ""}
                {pokemon.moves.length > 4 ? Moveset() : ""}
              </Box>
            </Flex>
            <Img
              src={pokemon.sprites.other["official-artwork"].front_default}
              //
              boxSize="270px"
              //
              position="absolute"
              top="-132px"
              right="35"
            />
          </Flex>
        ) : (
          !setReloadCards
        )}
      </Flex>
      <Footer />
    </Flex>
  );
}
