import { Text } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DetailsContainer } from "./styled";

export function Details() {
  // Receber pokemon direcionado
  const params = useParams();
  // console.log(params.pokemon)

  // Receber pokemon
  const [pokemon, setPokemon] = useState("");

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

  //   console.log(
  //     pokemon.sprites.versions["generation-v"]["black-white"].animated
  //       .front_default
  //   );

  // Base Stats
  // HP
  // Attack
  // Defense
  // Sp. Atk
  // Sp. Def
  // Speed
  // Total
  // Moves

  return (
    <>
      <Header />
      <DetailsContainer>
        {pokemon !== "" ? (
          <>
            {!pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default === false ? (
              <img
                src={
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
              />
            ) : (
              <img src={pokemon.sprites.front_default} />
            )}
          </>
        ) : (
          !setReloadCards
        )}

        {/* <img src={pokemon.sprites.back_default}/> */}
        <Text textTransform="capitalize">{pokemon.name}</Text>
      </DetailsContainer>
      <Footer />
    </>
  );
}
