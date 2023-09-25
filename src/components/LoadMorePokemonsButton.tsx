export default function LoadMorePokemonsButton({
  hasNextPage,
  loadMorePokemons,
}: {
  hasNextPage: () => boolean;
  loadMorePokemons: () => void;
}) {
  return (
    <>
      <button
        className="btn btn-primary transition-none"
        disabled={!hasNextPage()}
        onClick={loadMorePokemons}
      >
        Load more
      </button>
    </>
  );
}
