import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Inventory from "../code/Inventory";
import Leagues from "../code/Leagues";
import Match from "../code/Match";
import Team from "../code/Team";
import Score from "../code/Score";
import EditScore from "../components/EditScore";
import MatchLine from "../components/MatchLine";
import AnimatedHeader from "../components/AnimatedHeader";

export default function MainScreen() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const league = Inventory.getLeague(Leagues.SerieA);
  const leagueMatches = league == null ? [] : league.matches;

  const [matches, setMatches] = useState(leagueMatches);

  const handleChangeScore = (
    index: number,
    isHome: boolean,
    newDigit: string,
  ) => {
    const supportedSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (supportedSymbols.indexOf(newDigit) < 0) return;

    let digit = parseInt(newDigit, 10);

    const updatedMatches = matches.map((match, i) => {
      if (i === index) {
        const homeTeam = new Team(
          match.homeTeam.name,
          match.homeTeam.id,
          match.homeTeam.logoSmallUrl,
          match.homeTeam.logoBigUrl,
        );
        const awayTeam = new Team(
          match.awayTeam.name,
          match.awayTeam.id,
          match.awayTeam.logoSmallUrl,
          match.awayTeam.logoBigUrl,
        );

        const newMatch = new Match(homeTeam, awayTeam);

        let val = isHome
          ? match.predictedScore.homeGoals
          : match.predictedScore.awayGoals;

        if (digit == 0) {
          if (val == 1) val = 10;
          else val = 0;
        } else {
          if (val > 1) val = digit;
          else val = val * 10 + digit;
        }

        newMatch.predictedScore = new Score(
          isHome ? val : match.predictedScore.homeGoals,
          !isHome ? val : match.predictedScore.awayGoals,
        );

        newMatch.resultScore = new Score(
          match.resultScore.homeGoals,
          match.resultScore.awayGoals,
        );

        return newMatch;
      }

      return match;
    });

    setMatches(updatedMatches);
  };

  const handleEditApply = () => {
    setExpanded(null);
  };

  return (
    <AnimatePresence mode="wait">
      {expanded === null ? (
        <motion.div
          key="list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-3"
        >
          <AnimatedHeader text="Serie A - Gameday 18" />
          {matches.map((v, i) => (
            <MatchLine
              key={i}
              onMatchClicked={() => setExpanded(i)}
              home={v.homeTeam}
              away={v.awayTeam}
              scoreHome={v.predictedScore.homeGoals}
              scoreAway={v.predictedScore.awayGoals}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          key="expanded"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-6"
        >
          <EditScore
            index={expanded}
            home={matches[expanded].homeTeam}
            away={matches[expanded].awayTeam}
            scoreHome={matches[expanded].predictedScore.homeGoals}
            scoreAway={matches[expanded].predictedScore.awayGoals}
            onScoreChanged={handleChangeScore}
            onApply={handleEditApply}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
