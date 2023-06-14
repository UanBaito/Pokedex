export default function Searchbar({
  searchState,
  handleInput,
}: {
  searchState: string;
  handleInput: any;
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
