import type { FC } from "react";

interface TeamLogoProps {
  logo: string;
}

const TeamLogo: FC<TeamLogoProps> = ({ logo }) => {
  return (
    <div className="w-[150px] aspect-square mx-[25px]">
      <img src={logo} />
    </div>
  );
};

export default TeamLogo;
