import { HiOutlineChevronUp } from "react-icons/hi";
import { IconContext } from "react-icons";
import { MouseEventHandler } from "react";
import { Pokemon } from "pokenode-ts";

export default function MinimizedPokeInfo({
  handleClickMaximize,
  selectedPoke,
  isMinimized,
}: {
  handleClickMaximize: MouseEventHandler;
  selectedPoke: Pokemon;
  isMinimized: boolean;
}) {
  return (
    <div
      className={
        "flex flex-row-reverse fixed bottom-0 bg-primary h-12 w-full z-50 " +
        (isMinimized ? "" : "hidden")
      }
    >
      <button
        className="basis-1/4 flex justify-center align-middle bg-secondary"
        onClick={handleClickMaximize}
      >
        <IconContext.Provider
          value={{
            size: "100%",
            className: "global-class-name",
            style: { padding: "6px" },
          }}
        >
          <div>
            <HiOutlineChevronUp />
          </div>
        </IconContext.Provider>
      </button>
      <div className="flex flex-row basis-3/4 justify-center">
        <img
          className="object-contain"
          src={
            selectedPoke.sprites.front_default
              ? selectedPoke.sprites.front_default
              : "src/components/assets/sprite-unavailable.svg"
          }
        ></img>
        <p className="capitalize my-auto font-bold">{selectedPoke.name}</p>
      </div>
    </div>
  );
}
