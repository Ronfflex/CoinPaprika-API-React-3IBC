import React, { useEffect, useState } from "react";
import { CryptoService } from "../../services";
import { CryptoDTO } from "../../dto";

function TopCryptoVolume24() {
  const [cryptos, setCryptos] = useState<CryptoDTO[]>([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      const apiCryptos = await CryptoService.getTop50CryptosByVolume();
      setCryptos(apiCryptos);
    };
    fetchCryptos().catch(console.error);
  }, []);

  return (
    <div>
      <h2>Top 50 Cryptos by Volume (24 hours)</h2>
      {cryptos.map((crypto) => (
        <div key={crypto.id}>
          <p>{crypto.name}</p>
          <p>Volume: {crypto.quotes.USD.volume_24h}</p>
        </div>
      ))}
    </div>
  );
}

export default TopCryptoVolume24;
