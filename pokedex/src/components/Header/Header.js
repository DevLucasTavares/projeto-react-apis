import { Button, Flex, Img } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  HeaderContainer,
  LeftButtonContainer,
  LogoContainer,
  RightButtonContainer,
} from "./styled";
import logo from "../../assets/logo.png";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { AiOutlineLeft } from "react-icons/ai"

export function Header({
  myPokedex,
  setMyPokedex,
  pokemon,
  showOverlay,
  setShowOverlay,
}) {
  // Navegar entre páginas
  const navigate = useNavigate();

  const location = useLocation();
  const params = useParams();

  let alreadyCaptured = false;
  if (location.pathname === `/details/${params.pokemon}`) {
    alreadyCaptured = myPokedex.find((poke) => {
      return poke.name === pokemon.name;
    });
  }

  const handleAddToPokedex = () => {
    setMyPokedex([...myPokedex, pokemon]);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  };

  const handleRemoveFromPokedex = () => {
    const newPokedex = myPokedex.filter((poke) => poke.name !== pokemon.name);
    setMyPokedex(newPokedex);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  };

  const ButtonPokelist = () => {
    return <Button
    variant="link"
    color={"black"}
    fontSize="24px"
    fontWeight="bold"
    onClick={() => goToHome(navigate)}
    w="10rem"
    as='u'
    leftIcon={<AiOutlineLeft/>}
  >
    Todos os Pokémons
  </Button>
  }

  const ButtonPokedex = () => {
    return <Button
    bg="#33A4F5"
    color="white"
    fontSize="24px"
    w="287px"
    h="74px"
    onClick={() => goToPokedex(navigate)}
    _hover={{
      bg: "#2c8cd1",
    }}
    _focus={{
      bg: "#2c8cd1",
    }}
  >
    Pokédex
  </Button>
  }

  const ButtonAdd = () => {
    return <Button
    w="226px"
    bg="#33A4F5"
    color="white"
    fontSize="16px"
    onClick={() => handleAddToPokedex()}
    _hover={{
      bg: "#2c8cd1",
    }}
    _focus={{
      bg: "#2c8cd1",
    }}
  >
    Adicionar
  </Button>
  }

  const ButtonRemove = () => {
    return <Button
    w="226px"
    bg="#FF6262"
    color="white"
    fontSize="16px"
    onClick={() => handleRemoveFromPokedex()}
    _hover={{
      bg: "#d42836",
    }}
    _focus={{
      bg: "#d42836",
    }}
  >
    Excluir da Pokédex
  </Button>
  }

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <HeaderContainer>
            <LogoContainer>
              <Img w={"307px"} src={logo} />
            </LogoContainer>
            <RightButtonContainer>
              {ButtonPokedex()}
            </RightButtonContainer>
          </HeaderContainer>
        );
      case "/pokedex":
        return (
          <HeaderContainer>
            <LeftButtonContainer>
              {ButtonPokelist()}
            </LeftButtonContainer>
            <LogoContainer>
              <Img w={"307px"} src={logo} />
            </LogoContainer>
          </HeaderContainer>
        );
      case `/details/${params.pokemon}`:
        return (
          <HeaderContainer>
            <LeftButtonContainer>
            {ButtonPokelist()}
            </LeftButtonContainer>

            <LogoContainer>
              <Img w={"307px"} src={logo} />
            </LogoContainer>

            <RightButtonContainer>
              {alreadyCaptured ? (
                ButtonRemove()
              ) : (
                ButtonAdd()
              )}
            </RightButtonContainer>
          </HeaderContainer>
        );
      default:
        return (
          <Flex
          minH="160px"
          py="22px"
          //
          justifyContent="center"
          >
            <Img src={logo} onClick={() => goToHome(navigate)} />
          </Flex>
        );
    }
  };
  return <>{renderHeader()}</>;
}
