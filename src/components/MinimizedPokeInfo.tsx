import { HiOutlineChevronUp } from "react-icons/hi";
import { IconContext } from "react-icons";
import { PokeInfo } from "./typings";
import { MouseEventHandler } from "react";

export default function MinimizedPokeInfo({
  handleClickMaximize,
  selectedPoke,
}: {
  handleClickMaximize: MouseEventHandler;
  selectedPoke: PokeInfo;
}) {
  return (
    <div>
      <div className="flex flex-row fixed bottom-0 bg-primary h-12 w-full z-50">
        <span
          className="basis-1/5 flex justif justify-center align-middle bg-secondary"
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
        </span>
        <div className="flex flex-row basis-2/4 justify-center">
          <img
            className="object-contain"
            src={
              selectedPoke.pokemon.sprites.front_default
                ? selectedPoke.pokemon.sprites.front_default
                : "src/components/assets/sprite-unavailable.svg"
            }
          ></img>
          <p className="capitalize my-auto font-bold">
            {selectedPoke.pokemon.name}
          </p>
        </div>
      </div>
    </div>
  );
}
