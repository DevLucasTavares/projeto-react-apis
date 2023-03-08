import axios from "axios";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Card(props) {
  const { name } = props;

  // Estado com todos os detalhes do pokemon
  const [pokemon, setPokemon] = useState();
  // Estado para reload nos cards
  const [reloadCards, setReloadCards] = useState(true);

  // Carregar cards
  useEffect(() => {
    buscarPokemon();
  }, [reloadCards]);

  // Filtrar pokemons com formas diferentes
  const pokeWithForms = [
    "deoxys",
    "wormadam",
    "giratina",
    "shaymin",
    "basculin",
    "darmanitan",
    "tornadus",
    "thundurus",
    "landorus",
    "keldeo",
    "meloetta",
    "meowstic",
    "aegislash",
    "pumpkaboo",
    "gourgeist",
    "zygarde",
    "oricorio",
    "lycanroc",
    "wishiwashi",
    "minior",
    "mimikyu",
    "toxtricity",
    "eiscue",
    "indeedee",
    "morpeko",
    "urshifu",
    "basculegion",
    "enamorus",
  ];
  let pokeform = "";
  const pokeTransform = (pokemon) => {
    switch (pokemon) {
      case "deoxys":
        pokeform = "normal";
        break;
      case "wormadam":
        pokeform = "plant"
        break;
      case "giratina":
        pokeform = "altered"
        break;
      case "shaymin":
        pokeform = "land"
        break;
      case "basculin":
        pokeform = "red-striped"
        break;
      case "darmanitan":
        pokeform = "standard"
        break;
      case "tornadus":
        pokeform = "incarnate"
        break;
      case "thundurus":
        pokeform = "incarnate"
        break;
      case "landorus":
        pokeform = "incarnate"
        break;
      case "keldeo":
        pokeform = "ordinary"
        break;
      case "meloetta":
        pokeform = "aria"
        break;
      case "meowstic":
        pokeform = "male"
        break;
      case "aegislash":
        pokeform = "shield"
        break;
      case "pumpkaboo":
        pokeform = "average"
        break;
      case "gourgeist":
        pokeform = "average"
        break;
      case "zygarde":
        pokeform = "complete"
        break;
      case "oricorio":
        pokeform = "baile"
        break;
      case "lycanroc":
        pokeform = "midday"
        break;
      case "wishiwashi":
        pokeform = "solo"
        break;
      case "minior":
        pokeform = "red"
        break;
      case "mimikyu":
        pokeform = "disguised"
        break;
      case "toxtricity":
        pokeform = "amped"
        break;
      case "eiscue":
        pokeform = "ice"
        break;
      case "indeedee":
        pokeform = "female"
        break;
      case "morpeko":
        pokeform = "full-belly"
        break;
      case "urshifu":
        pokeform = "single-strike"
        break;
      case "basculegion":
        pokeform = "male";
        break;
      case "enamorus":
        pokeform = "incarnate"
        break;
      default:
        pokeform = "";
        break;
    }
  };
  pokeTransform(name);

  // Receber pokemon
  const buscarPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}${
          pokeWithForms.includes(name) ? `-${pokeform}` : ""
        }/`
      );
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(pokemon)

  return (
    <Center py={6}>
      {pokemon !== undefined ? (
        <Box
          maxW={"320px"}
          w={"full"}
          bg="white"
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            #{pokemon.id}
          </Text>
          <Text textAlign={"center"} color={("gray.700", "gray.400")} px={3}>
            {/* Descrição */}
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge px={2} py={1} bg="gray.50" fontWeight={"400"}>
              {pokemon.types[0].type.name}
            </Badge>
            {pokemon.types[1] ? (
              <Badge px={2} py={1} bg="gray.50" fontWeight={"400"}>
                {pokemon.types[1] ? pokemon.types[1].type.name : ""}
              </Badge>
            ) : (
              ""
            )}
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              {/* ////////////////////////////////////// */}
              Details
              {/* ////////////////////////////////////// */}
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              {/* ////////////////////////////////////// */}
              Add to Pokedéx
              {/* ////////////////////////////////////// */}
            </Button>
          </Stack>
        </Box>
      ) : (
        !setReloadCards
      )}
    </Center>
  );
}
