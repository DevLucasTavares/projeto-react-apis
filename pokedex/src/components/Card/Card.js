import axios from "axios";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  Image,
  Img,
  Fade,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPoketypes } from "../../utils/ReturnPoketypes";
import { goToDetails } from "../../routes/coordinator";
import background from "../../assets/pokeballback.png";
import useOverlayMessage from "../../utils/useOverlayMessage";

export default function Card({ name, myPokedex, setMyPokedex, showOverlay, setShowOverlay }) {
  // Estado com todos os detalhes do pokemon
  const [pokemon, setPokemon] = useState();
  // Estado para reload nos cards
  const [reloadCards, setReloadCards] = useState(true);

  //Ver em qual rota estou
  const location = useLocation();

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
        pokeform = "plant";
        break;
      case "giratina":
        pokeform = "altered";
        break;
      case "shaymin":
        pokeform = "land";
        break;
      case "basculin":
        pokeform = "red-striped";
        break;
      case "darmanitan":
        pokeform = "standard";
        break;
      case "tornadus":
        pokeform = "incarnate";
        break;
      case "thundurus":
        pokeform = "incarnate";
        break;
      case "landorus":
        pokeform = "incarnate";
        break;
      case "keldeo":
        pokeform = "ordinary";
        break;
      case "meloetta":
        pokeform = "aria";
        break;
      case "meowstic":
        pokeform = "male";
        break;
      case "aegislash":
        pokeform = "shield";
        break;
      case "pumpkaboo":
        pokeform = "average";
        break;
      case "gourgeist":
        pokeform = "average";
        break;
      case "zygarde":
        pokeform = "complete";
        break;
      case "oricorio":
        pokeform = "baile";
        break;
      case "lycanroc":
        pokeform = "midday";
        break;
      case "wishiwashi":
        pokeform = "solo";
        break;
      case "minior":
        pokeform = "red";
        break;
      case "mimikyu":
        pokeform = "disguised";
        break;
      case "toxtricity":
        pokeform = "amped";
        break;
      case "eiscue":
        pokeform = "ice";
        break;
      case "indeedee":
        pokeform = "female";
        break;
      case "morpeko":
        pokeform = "full-belly";
        break;
      case "urshifu":
        pokeform = "single-strike";
        break;
      case "basculegion":
        pokeform = "male";
        break;
      case "enamorus":
        pokeform = "incarnate";
        break;
      default:
        pokeform = "";
        break;
    }
  };
  pokeTransform(name);

/////////////////////
const { OverlayMessage, handleButtonClick } = useOverlayMessage()

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

  // Ir para os detalhes
  const navigate = useNavigate();

  // Capturar pokemon
  const [captured, setCaptured] = useState(false);

  // Setar pokemon na pokedex
  const handleAddToPokedex = (pokemon) => {
    const alreadyCaptured = myPokedex.find((poke) => {
      return poke.name === pokemon.name;
    });
    if (!alreadyCaptured) {
      setMyPokedex([...myPokedex, pokemon]);
    }
    setCaptured(!captured);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  };

  // Remover Pokemon da Pokedex
  const handleRemoveFromPokedex = () => {
    const newPokedex = myPokedex.filter((poke) => poke.name !== pokemon.name);
    setMyPokedex(newPokedex);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  };

  const handleVerifyPokedex = () => {
    const alreadyCaptured = myPokedex.find((poke) => {
      return poke.name === pokemon.name;
    });
    if (!alreadyCaptured) {
      return (
        <Button
          onClick={() => handleAddToPokedex(pokemon)}
          height="38px"
          width="146px"
          flex={1}
          fontSize={"16px"}
          rounded={"8px"}
          bg={"white"}
          color={"#474747"}
          boxShadow={
            "0px 1px 25px -5px rgb(255 255 255/ 48%), 0 10px 10px -5px rgb(255 255 255 / 43%)"
          }
          _hover={{
            bg: "lightgray",
          }}
          _focus={{
            bg: "lightgray",
          }}
        >
          Capturar!
        </Button>
      );
    } else {
      return (
        <Button
        height="38px"
        width="146px"
          flex={1}
          fontSize={"16px"}
          rounded={"8px"}
          bg={"green.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 225 90 / 48%), 0 10px 10px -5px rgb(66 225 90 / 43%)"
          }
          _hover={{
            bg: "green.400",
          }}
          _focus={{
            bg: "green.400",
          }}
        >
          Capturado!
        </Button>
      );
    }
  };

  const addZero = (id) => {
    if (id < 10) {
      return "0";
    } else if (id >= 10 && id < 100) {
      return "";
    }
  };

  const bgTypeColor = () => {
    switch (pokemon.types[0].type.name) {
      case "type":
        return "#000";
      case "poison":
        return "#7e3880";
      case "grass":
        return "#729F92";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#54ab74";
      case "water":
        return "#71C3FF";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      case "dark":
        return "#312c36";
      case "dragon":
        return "#004170";
      case "electric":
        return "#c2af53";
      case "fairy":
        return "#b872ba";
      case "fighting":
        return "#851d3b";
      case "ghost":
        return "#323170";
      case "ground":
        return "#ad6f4b";
      case "ice":
        return "#93bec4";
      case "psychic":
        return "#ad4b60";
      case "rock":
        return "#bda362";
      case "steel":
        return "#727982";
      default:
        return "black";
    }
  };

  /////////////////////////////////////////////////////////////////
  return (
    <Center py={6}>
      {pokemon !== undefined ? (
        <Box
          w={"440px"}
          h={"210px"}
          bg={bgTypeColor()}
          color={"white"}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"start"}
          pos={"relative"}
        >
          {/* ---------- IMAGEM ---------- */}
          <Image
            src={background}
            pos={"absolute"}
            w={"240.73px"}
            right={"0"}
            top={"0"}
          />
          <Image
            boxSize={"193px"}
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            pos={"absolute"}
            bottom={"70"}
            left={"234px"}
          />

          {/* ---------- ID ---------- */}
          <Text fontWeight={600}>
            #{addZero(pokemon.id)}
            {pokemon.id}
          </Text>
          {/* ---------- NOME ---------- */}
          <Heading
            textTransform="capitalize"
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {name}
          </Heading>

          {/* ---------- TIPOS ---------- */}
          <Stack
            align={"start"}
            justify={"start"}
            direction={"row"}
            mt={"10px"}
          >
            {pokemon.types.map((type) => {
              return (
                <Img
                  key={type.type.name}
                  src={getPoketypes(type.type.name)}
                  alt={type.type.name}
                />
              );
            })}
          </Stack>

          <Stack mt={8} direction={"row"} spacing={"175px"}>
            {/* ---------- DETALHES ---------- */}
            <Button
              onClick={() => goToDetails(navigate, pokemon.name)}
              variant="link"
              as="u"
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              colorScheme="black"
              _focus={{
                bg: "gray.200",
              }}
            >
              Detalhes
            </Button>

            {/* ---------- CAPTURE ---------- */}
            {location.pathname === "/pokedex" ? (
              <Button
                onClick={() => handleRemoveFromPokedex()}
                height="38px"
                width="146px"
                fontSize="sm"
                rounded="8px"
                bg="#FF6262"
                color="white"
                boxShadow={
                  "0px 1px 25px -5px rgb(255 98 98 / 48%), 0 10px 10px -5px rgb(255 98 98 / 43%)"
                }
                _hover={{
                  bg: "red.500",
                }}
                _focus={{
                  bg: "red.500",
                }}
              >
                Excluir
              </Button>
            ) : location.pathname === "/" ? (
              handleVerifyPokedex()
            ) : (
              console.log("botao padrao")
            )}
            <OverlayMessage />
          </Stack>
        </Box>
      ) : (
        !setReloadCards
      )}
    </Center>
  );
}
