import { ChangeEventHandler } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function Searchbar({
  searchState,
  handleInput,
}: {
  searchState: string;
  handleInput: ChangeEventHandler;
}) {
  return (
    <div className="rounded-none w-full flex text-white border-b border-primary">
      <input
        placeholder="Search pokemon..."
        type="text"
        className="input w-full rounded-none grow"
        name="searchbar"
        value={searchState}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}
