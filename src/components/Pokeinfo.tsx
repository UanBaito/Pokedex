import { Pokemon } from "pokenode-ts";
import { useState, useEffect } from "react";
import MaximazedPokeInfo from "./MaximazedPokeInfo";
import MinimizedPokeInfo from "./MinimizedPokeInfo";

export default function Pokeinfo({
  selectedPoke,
  isMinimized,
  handleClickMaximize,
  handleClickMinimize,
}: {
  selectedPoke: Pokemon;
  isMinimized: boolean;
  handleClickMaximize: any;
  handleClickMinimize: any;
}) {
  return (
    <>
      {isMinimized ? (
        <MinimizedPokeInfo
          handleClickMaximize={handleClickMaximize}
          selectedPoke={selectedPoke}
        />
      ) : (
        <MaximazedPokeInfo
          handleClickMinimize={handleClickMinimize}
          selectedPoke={selectedPoke}
        />
      )}
    </>
  );
}
