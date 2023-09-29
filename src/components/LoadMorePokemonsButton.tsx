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
          className="btn font-extrabold btn-accent transition-none m-2 w-80"
          disabled={!hasNextPage()}
          onClick={loadMorePokemons}
        >
          Load more
        </button>
      )}
    </>
  );
}
