import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../components/Details/Details";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Pokedex } from "../components/Pokedex/Pokedex";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="pokemon/:pokemon" element={<Details />} />
        <Route path="login/:pokemon" element={<Details/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
