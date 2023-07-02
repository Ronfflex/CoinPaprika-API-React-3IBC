import React from "react";
import { CryptoDTO } from "../../dto";

export const ComparisonContext = React.createContext({
  comparisonList: [] as CryptoDTO[],
  addToComparison: (crypto: CryptoDTO) => {},
  removeFromComparison: (cryptoId: string) => {},
});
