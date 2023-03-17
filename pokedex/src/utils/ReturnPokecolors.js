export const getPokecolors = (type) => {
//
switch (type) {
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

}