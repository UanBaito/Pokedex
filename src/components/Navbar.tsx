import React from "react";
import Searchbar from "./Searchbar";

export default function Navbar({
  searchState,
  handleInput,
}: {
  searchState: string;
  handleInput: any;
}) {
  return (
    <div className="bg-violet-600 w-full sticky top-0 z-30">
      <h1>Hello, world!</h1>
      <Searchbar searchState={searchState} handleInput={handleInput} />
    </div>
  );
}
