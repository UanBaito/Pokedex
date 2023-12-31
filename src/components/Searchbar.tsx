import { useId } from "react";

export default function Searchbar({
  searchState,
  setSearchState,
}: {
  searchState: string;
  setSearchState: (e: string) => void;
}) {
  const searchbarID = useId();
  return (
    <>
      <label className="filter-labels" htmlFor={searchbarID}>
        Search
      </label>
      <input
        id={searchbarID}
        placeholder="Search pokemon..."
        type="text"
        className="input rounded-none w-full text-white filters"
        name="searchbar"
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />
    </>
  );
}
