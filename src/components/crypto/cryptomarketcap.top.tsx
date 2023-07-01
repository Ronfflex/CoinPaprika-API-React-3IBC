import React, { useEffect, useState } from "react";
import { CryptoService } from "../../services";
import { CryptoDTO } from "../../dto";

function TopCryptoMarketCap() {
  const [cryptos, setCryptos] = useState<CryptoDTO[]>([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      const apiCryptos = await CryptoService.getTop50CryptosByMarketCap();
      setCryptos(apiCryptos);
    };
    fetchCryptos().catch(console.error);
  }, []);

  return (
    <div>
      <h2>Top 50 Cryptos by Market Cap</h2>
      {cryptos.map((crypto) => (
        <div key={crypto.id}>
          <p>{crypto.name}</p>
          <p>Market Cap: {crypto.quotes.USD.market_cap} $</p>
        </div>
      ))}
    </div>
  );
}

export default TopCryptoMarketCap;
