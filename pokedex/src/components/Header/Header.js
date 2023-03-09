import { Button, Img } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeaderContainer } from "./styled";
import logo from "../../assets/logo.png";
import { goToHome, goToPokedex } from "../../routes/coordinator";

export function Header() {
  // Navegar entre páginas
  const navigate = useNavigate();

  const location = useLocation();
  const params = useParams();

  console.log(params.pokemon)

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <HeaderContainer>
            <Img src={logo} />
            <Button onClick={()=>goToPokedex(navigate)} w="10rem">
              Pokedex
            </Button>
          </HeaderContainer>
        );
      case "/pokedex":
        return (
          <HeaderContainer>
            <Button onClick={()=>goToHome(navigate)} w="10rem">
              Todos os pokemons
            </Button>
            <Img src={logo} />
          </HeaderContainer>
        );
      case `/login/${params.pokemon}`:
        return (
          <HeaderContainer>
            <Button onClick={()=>goToHome(navigate)} w="10rem">
              Todos os pokemons
            </Button>
            <Img src={logo} />
            <Button onClick={()=>goToPokedex(navigate)} w="10rem">
              Pokedex
            </Button>
          </HeaderContainer>
        );
      default:
        return (
          <HeaderContainer>
            <Img src={logo} />
          </HeaderContainer>
        );
    }
  };

  return <>{renderHeader()}</>;
}
