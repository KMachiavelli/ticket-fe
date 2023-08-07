import { ClipLoader } from "react-spinners";
import { SpinnerVariant } from "./types";
import { ReactElement, useMemo } from "react";
import styles from "../../../styles/config/exports-to-js.module.scss";

interface SpinnerI {
  variant: SpinnerVariant;
  children: ReactElement;
  isLoading: boolean;
  className?: string;
}

export const Spinner = ({
  variant,
  children,
  isLoading,
  className,
}: SpinnerI) => {
  const variantMap = new Map([
    [SpinnerVariant.DARK, styles.black],
    [SpinnerVariant.LIGHT, styles.white],
  ]);

  return (
    <>
      {isLoading ? (
        <ClipLoader className={className} color={variantMap.get(variant)} />
      ) : (
        children
      )}
    </>
  );
};
