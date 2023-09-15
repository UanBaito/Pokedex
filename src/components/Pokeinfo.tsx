import MaximazedPokeInfo from "./MaximazedPokeInfo";
import MinimizedPokeInfo from "./MinimizedPokeInfo";
import { PokeInfo } from "./typings";

export default function Pokeinfo({
  selectedPoke,
  isMinimized,
  handleClickMaximize,
  handleClickMinimize,
}: {
  selectedPoke: PokeInfo;
  isMinimized: boolean;
  handleClickMaximize: () => void;
  handleClickMinimize: () => void;
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
