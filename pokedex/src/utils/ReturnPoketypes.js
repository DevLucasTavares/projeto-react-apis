import bug from "../assets/poketypes/bug.png"
import dark from "../assets/poketypes/dark.png";
import dragon from "../assets/poketypes/dragon.png";
import electric from "../assets/poketypes/electric.png";
import fairy from "../assets/poketypes/fairy.png";
import fighting from "../assets/poketypes/fighting.png";
import fire from "../assets/poketypes/fire.png";
import flying from "../assets/poketypes/flying.png";
import ghost from "../assets/poketypes/ghost.png";
import grass from "../assets/poketypes/grass.png";
import ground from "../assets/poketypes/ground.png";
import ice from "../assets/poketypes/ice.png";
import normal from "../assets/poketypes/normal.png";
import poison from "../assets/poketypes/poison.png";
import psychic from "../assets/poketypes/psychic.png";
import rock from "../assets/poketypes/rock.png";
import steel from "../assets/poketypes/steel.png";
import water from "../assets/poketypes/water.png";

export const getPoketypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };