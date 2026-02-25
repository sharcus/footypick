import type { FC } from "react";
import type Team from "../code/team";

interface MatchLineProps {
  home: Team;
  away: Team;
  scoreHome: number;
  scoreAway: number;
  onMatchClicked: () => void;
}

const MatchLine: FC<MatchLineProps> = ({
  home,
  away,
  scoreHome,
  scoreAway,
  onMatchClicked,
}) => {
  return (
    <div
      onClick={onMatchClicked}
      className="cursor-pointer bg-gray-800 p-3 flex items-center gap-1 w-full justify-center mx-auto max-w-[600px]"
    >
      <div className="w-10 h-10">
        <img src={home.logoSmallUrl} />
      </div>
      <span className="w-[calc(50%_-_80px)] text-center">{home.name}</span>
      <div className="w-10 h-10 bg-blue-500">
        <span className="inline-block w-full text-2xl text-center">
          {scoreHome}
        </span>
      </div>
      <div className="w-10 h-10 bg-blue-500">
        <span className="inline-block w-full text-2xl text-center">
          {scoreAway}
        </span>
      </div>
      <span className="w-[calc(50%_-_80px)] text-center">{away.name}</span>
      <div className="w-10 h-10">
        <img src={away.logoSmallUrl} />
      </div>
    </div>
  );
};

export default MatchLine;
