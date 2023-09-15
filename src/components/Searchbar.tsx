import { ChangeEventHandler } from "react";

export default function Searchbar({
  searchState,
  handleInput,
}: {
  searchState: string;
  handleInput: ChangeEventHandler;
}) {
  return (
    <div className="sticky top-0">
      <label>
        searchbar:
        <input
          name="searchbar"
          value={searchState}
          onChange={(e) => handleInput(e)}
        />
      </label>
    </div>
  );
}
