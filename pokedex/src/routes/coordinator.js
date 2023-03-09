
export const goToPokedex = (navigate) => {
    navigate("/pokedex");
  };

export const goToHome = (navigate) => {
    navigate("/");
  };

export const goToDetails = (navigate, pokemon) => {
    navigate(`/login/${pokemon}`)
  }
