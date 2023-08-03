import { ClipLoader } from "react-spinners";
import { SpinnerVariant } from "./types";
import { ReactElement, useMemo } from "react";
import styles from "../../../styles/config/exports-to-js.module.scss";

interface SpinnerI {
  variant: SpinnerVariant;
  children: ReactElement;
  isLoading: boolean;
}

export const Spinner = ({ variant, children, isLoading }: SpinnerI) => {
  const variantMap = new Map([
    [SpinnerVariant.DARK, styles.black],
    [SpinnerVariant.LIGHT, styles.white],
  ]);

  return <>{isLoading ? <ClipLoader color={variant} /> : children}</>;
};
