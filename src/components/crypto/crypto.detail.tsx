import style from "./crypto.detail.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoService } from "../../services";
import { CryptoDTO } from "../../dto";

function CryptoDetail() {
  const { id } = useParams<{ id: string }>();
  const [crypto, setCrypto] = useState<CryptoDTO | undefined>();

  useEffect(() => {
    const fetchCrypto = async () => {
      const apiCrypto = await CryptoService.getCrypto(id || "");
      setCrypto(apiCrypto);
    };
    fetchCrypto().catch(console.error);
  }, [id]);

  return (
    <div className={style.container}>
      {crypto ? (
        <div>
          <h2>{crypto.name}</h2>
          <p>{crypto.symbol}</p>
          <p>Rank: {crypto.rank}</p>
          <p>Price: {crypto.quotes.USD.price}</p>
          <p>Market cap: {crypto.quotes.USD.market_cap}</p>
          <p>Volume 24h: {crypto.quotes.USD.volume_24h}</p>
          <p>Percent change 1h: {crypto.quotes.USD.percent_change_1h}</p>
          <p>Percent change 24h: {crypto.quotes.USD.percent_change_24h}</p>
          <p>Percent change 7d: {crypto.quotes.USD.percent_change_7d}</p>
          <p>Total suply: {crypto.total_supply}</p>
          <p>Max suply: {crypto.max_supply}</p>
          <p>Circulating suply: {crypto.circulating_supply}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CryptoDetail;
