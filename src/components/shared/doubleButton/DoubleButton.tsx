import { MouseEventHandler } from "react";
import { MinusIcon } from "../../../assets/icons/MinusIcon";
import { PlusIcon } from "../../../assets/icons/PlusIcon";

interface DoubleButtonI {
  handlePlusClick: MouseEventHandler<HTMLButtonElement>;
  handleMinusClick: MouseEventHandler<HTMLButtonElement>;
}

export const DoubleButton = ({
  handleMinusClick,
  handlePlusClick,
}: DoubleButtonI) => {
  return (
    <div className="double-btn">
      <button onClick={handlePlusClick}>
        <PlusIcon />
      </button>
      <button onClick={handleMinusClick}>
        <MinusIcon />
      </button>
    </div>
  );
};
