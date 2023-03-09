import { ChakraProvider, Flex, Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { PokedexDisplay, SelectDisplay } from "./styled";

export function Home() {
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

  return (
    <Flex direction='column' flex='1'>
      <Header/>
      <SelectDisplay>
      <Select
        placeholder="Select pokedex"
        value={genSelect}
        onChange={(e) => setGenSelect(e.target.value)}
        w='20rem'
        bg='white'
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
      </SelectDisplay>
      <PokedexDisplay>
      {pokeGen
        .filter((pokemon) => {
          if (genSelect === "Gen1") {
            return pokemon.entry_number >= 0 && pokemon.entry_number <= 151;
          } else if (genSelect === "Gen2") {
            return pokemon.entry_number >= 152 && pokemon.entry_number <= 251;
          } else if (genSelect === "Gen3") {
            return pokemon.entry_number >= 252 && pokemon.entry_number <= 386;
          } else if (genSelect === "Gen4") {
            return pokemon.entry_number >= 387 && pokemon.entry_number <= 493;
          } else if (genSelect === "Gen5") {
            return pokemon.entry_number >= 494 && pokemon.entry_number <= 649;
          } else if (genSelect === "Gen6") {
            return pokemon.entry_number >= 650 && pokemon.entry_number <= 721;
          } else if (genSelect === "Gen7") {
            return pokemon.entry_number >= 722 && pokemon.entry_number <= 809;
          } else if (genSelect === "Gen8") {
            return pokemon.entry_number >= 810 && pokemon.entry_number <= 905;
          } else if (genSelect === "Gen9") {
            return pokemon.entry_number >= 906 && pokemon.entry_number <= 1008;
          } else if (genSelect === "") {
            return pokemon.entry_number >= 0 && pokemon.entry_number <= 9;
          }
        })
        .map((pokemon) => {
          {
            return (
              <Card
                key={pokemon.pokemon_species.url}
                name={pokemon.pokemon_species.name}
                url={pokemon.pokemon_species.url}
              />
            );
          }
        })}
        </PokedexDisplay>
        <Footer />
    </Flex>
  );
}
