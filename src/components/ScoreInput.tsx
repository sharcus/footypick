import type { FC } from "react";

interface ScoreInputProps {
  value: number;
  onChange: (value: string) => void;
}

const ScoreInput: FC<ScoreInputProps> = ({ value, onChange }) => {
  let scoreString = value.toString();

  if (scoreString.at(0) == "0" && scoreString.length > 1)
    scoreString = scoreString.substring(1);

  return (
    <div className="w-[150px] aspect-square bg-blue-500 mx-[25px]">
      <input
        onKeyDown={(e) => {
          onChange(e.key);
        }}
        className="cursor-pointer caret-transparent text-8xl inline-block w-full text-center h-full [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        type="number"
        value={scoreString}
      />
    </div>
  );
};

export default ScoreInput;
