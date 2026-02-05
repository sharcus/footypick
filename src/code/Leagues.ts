const Leagues = {
  SerieA: 0,
  EPL: 1,
  Liga1: 2,
  LaLiga: 3,
  BundesLiga: 4,
} as const;

type Leagues = (typeof Leagues)[keyof typeof Leagues];

export default Leagues;