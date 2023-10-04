import { graphql, useFragment } from "react-relay";
import { StatsFragment$key } from "./__generated__/StatsFragment.graphql";

const StatsFragment = graphql`
  fragment StatsFragment on pokemon_v2_pokemon {
    pokemon_v2_pokemonstats {
      base_stat
      pokemon_v2_stat {
        name
        pokemon_v2_pokemonstats_aggregate(
          where: { pokemon_v2_pokemon: { is_default: { _eq: true } } }
        ) {
          aggregate {
            max {
              base_stat
            }
          }
        }
      }
    }
  }
`;

export default function Stats({ stats }: { stats: StatsFragment$key }) {
  const data = useFragment(StatsFragment, stats);

  const mappedStats = data.pokemon_v2_pokemonstats.map((v) => {
    // const maxStatByType =
    //   v.pokemon_v2_stat?.pokemon_v2_pokemonstats_aggregate.aggregate?.max
    //     ?.base_stat ?? 255;
    const baseStat = v.base_stat;
    const fillWidth = baseStat / (230 / 100);
    const percentage = fillWidth + "%";

    function getBgColor() {
      if (fillWidth <= 25) {
        return "red";
      } else if (25 < fillWidth && fillWidth <= 50) {
        return "yellow";
      } else if (50 < fillWidth && fillWidth <= 75) {
        return "green";
      } else {
        return "blue";
      }
    }

    let shortenedStatName: string;

    switch (v.pokemon_v2_stat?.name) {
      case "hp":
        shortenedStatName = "HP";
        break;
      case "attack":
        shortenedStatName = "Atk";
        break;
      case "defense":
        shortenedStatName = "Def";
        break;
      case "special-attack":
        shortenedStatName = "Sp.Atk";
        break;
      case "special-defense":
        shortenedStatName = "Sp.Def";
        break;
      case "speed":
        shortenedStatName = "Spd";
        break;
      default:
        shortenedStatName = "???";
    }

    return (
      <div className="stat-block" key={v.pokemon_v2_stat?.name}>
        <h3 className="stat-label inline">{shortenedStatName}: </h3>
        <h4 className="stat-number inline"> {baseStat}</h4>
        <div className="stat-bar">
          <div
            className="stat-fill"
            style={{ width: percentage, backgroundColor: getBgColor() }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <div className="info-box poke-info-stats">
      <h2 className="stats-title info-title text-center">Stats</h2>
      <div className="info-value poke-info-stats-box">{mappedStats}</div>
    </div>
  );
}
