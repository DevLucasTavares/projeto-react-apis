import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../components/Details/Details";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Pokedex } from "../components/Pokedex/Pokedex";

export const Router = () => {
  const [myPokedex, setMyPokedex] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home
              myPokedex={myPokedex}
              setMyPokedex={setMyPokedex}
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          }
        />
        <Route
          path="pokedex"
          element={
            <Pokedex
              myPokedex={myPokedex}
              setMyPokedex={setMyPokedex}
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          }
        />
        <Route
          path="details/:pokemon"
          element={
            <Details
              myPokedex={myPokedex}
              setMyPokedex={setMyPokedex}
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
