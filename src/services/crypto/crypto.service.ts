// crypto.service.ts
import { CryptoDTO } from "../../dto";
import axios from "axios";

export class CryptoService {
  static async getCryptos(): Promise<CryptoDTO[]> {
    try {
      const response = await axios.get(
        "https://api.coinpaprika.com/v1/tickers"
      );
      if (Array.isArray(response.data)) {
        return response.data;
      }
    } catch (err: unknown) {
      return [];
    }
    return [];
  }

  static async getCrypto(id: string): Promise<CryptoDTO | undefined> {
    try {
      const response = await axios.get(
        "https://api.coinpaprika.com/v1/tickers/" + id
      );
      return response.data;
    } catch (err: unknown) {
      return undefined;
    }
  }

  static async getTop50CryptosByVolume(): Promise<CryptoDTO[]> {
    try {
      const response = await axios.get(
        "https://api.coinpaprika.com/v1/tickers"
      );
      const cryptos = response.data;
      const sortedCryptos = cryptos.sort(
        (a: CryptoDTO, b: CryptoDTO) =>
          b.quotes.USD.volume_24h - a.quotes.USD.volume_24h
      );
      const top50Cryptos = sortedCryptos.slice(0, 50);
      return top50Cryptos;
    } catch (error) {
      console.error("Error retrieving top 50 cryptos by volume:", error);
      return [];
    }
  }

  static async getTop50CryptosByMarketCap(): Promise<CryptoDTO[]> {
    try {
      const response = await axios.get(
        "https://api.coinpaprika.com/v1/tickers"
      );
      const cryptos = response.data;
      const sortedCryptos = cryptos.sort(
        (a: CryptoDTO, b: CryptoDTO) =>
          b.quotes.USD.market_cap - a.quotes.USD.market_cap
      );
      const top50Cryptos = sortedCryptos.slice(0, 50);
      return top50Cryptos;
    } catch (error) {
      console.error("Error retrieving top 50 cryptos by market cap:", error);
      return [];
    }
  }
}
