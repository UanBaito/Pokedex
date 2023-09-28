export default function LoadMorePokemonsButton({
  hasNextPage,
  loadMorePokemons,
}: {
  hasNextPage: () => boolean;
  loadMorePokemons: () => void;
}) {
  return (
    <>
      {hasNextPage() && (
        <button
          className="btn btn-primary transition-none m-2"
          disabled={!hasNextPage()}
          onClick={loadMorePokemons}
        >
          Load more
        </button>
      )}
    </>
  );
}
