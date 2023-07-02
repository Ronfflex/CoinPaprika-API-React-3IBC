import React, { useState } from "react";
import { CryptoDTO } from "../../dto";
import { ComparisonContext } from "./cryptocompare.context";

interface Props {
  children?: React.ReactNode;
}

export const ComparisonProvider: React.FC<Props> = ({ children }: Props) => {
  const [comparisonList, setComparisonList] = useState<CryptoDTO[]>([]);

  const addToComparison = (crypto: CryptoDTO) => {
    setComparisonList((currentList) => [...currentList, crypto]);
  };

  const removeFromComparison = (cryptoId: string) => {
    setComparisonList((currentList) =>
      currentList.filter((crypto) => crypto.id !== cryptoId)
    );
  };

  return (
    <ComparisonContext.Provider
      value={{ comparisonList, addToComparison, removeFromComparison }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};
