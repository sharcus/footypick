import type { FC } from "react";

interface TeamLabelProps {
  label: string;
}

const TeamLabel: FC<TeamLabelProps> = ({ label }) => {
  return <span className="inline-block w-50 text-center">{label}</span>;
};

export default TeamLabel;
