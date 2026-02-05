import type { FC } from "react";
import type Team from "../code/team";
import ScoreInput from "./ScoreInput";
import TeamLogo from "./TeamLogo";
import TeamLabel from "./TeamLabel";

interface EditScoreProps {
  index: number;
  home: Team;
  away: Team;
  scoreHome: number;
  scoreAway: number;
  onScoreChanged: (index: number, isHome: boolean, newScore: string) => void;
  onApply: () => void;
}

const EditScore: FC<EditScoreProps> = ({
  index,
  home,
  away,
  scoreHome,
  scoreAway,
  onScoreChanged,
  onApply,
}) => {
  return (
    <>
      <div className="flex w-[400px] justify-center mx-auto">
        <TeamLogo logo={home.logoBigUrl} />
        <TeamLogo logo={away.logoBigUrl} />
      </div>
      <div className="flex w-[400px] text-2xl mx-auto">
        <TeamLabel label={home.name} />
        <TeamLabel label={away.name} />
      </div>
      <div className="flex w-[400px]  justify-center items-center mx-auto">
        <ScoreInput
          value={scoreHome}
          onChange={(value) => onScoreChanged(index, true, value)}
        />
        <ScoreInput
          value={scoreAway}
          onChange={(value) => onScoreChanged(index, false, value)}
        />
      </div>
      <div className="flex items-center justify-center w-full ">
        <button className="px-6 py-3 bg-green-600 rounded" onClick={onApply}>
          Apply
        </button>
      </div>
    </>
  );
};

export default EditScore;
