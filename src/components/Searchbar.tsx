export default function Searchbar({
  searchState,
  setSearchState,
}: {
  searchState: string;
  setSearchState: (e: string) => void;
}) {
  return (
    <div className="">
      <input
        placeholder="Search pokemon..."
        type="text"
        className="input rounded-none w-full text-white filters"
        name="searchbar"
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />
    </div>
  );
}
