import { useId } from "react";

export default function GenFilterInput({
  genFilter,
  setGenFilter,
}: {
  genFilter: string;
  setGenFilter: (e: string) => void;
}) {
  const genFilterID = useId();
  return (
    <>
      <label className="filter-labels" htmlFor={genFilterID}>
        Generation
      </label>
      <select
        id={genFilterID}
        className="select rounded-none text-white filters"
        value={genFilter}
        onChange={(e) => setGenFilter(e.target.value)}
      >
        <option value={"default"}>All</option>
        <option value={"generation-i"}>Kanto</option>
        <option value={"generation-ii"}>Johto</option>
        <option value={"generation-iii"}>Hoenn</option>
        <option value={"generation-iv"}>Sinnoh</option>
        <option value={"generation-v"}>Unova</option>
        <option value={"generation-vi"}>Kalos</option>
        <option value={"generation-vii"}>Alola</option>
        <option value={"generation-viii"}>Galar</option>
        <option value={"generation-ix"}>Paldea</option>
      </select>
    </>
  );
}
