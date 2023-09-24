export default function Searchbar({
  searchState,
  setSearchState,
}: {
  searchState: string;
  setSearchState: (e: string) => void;
}) {
  return (
    <div className="rounded-none w-full flex text-white border-b border-primary">
      <input
        placeholder="Search pokemon..."
        type="text"
        className="input w-full rounded-none grow"
        name="searchbar"
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />
    </div>
  );
}
