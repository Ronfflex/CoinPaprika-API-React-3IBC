// CryptoDTO.ts
export interface CryptoDTO {
  volume: any;
  id: string;
  name: string;
  symbol: string;
  rank: number;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      market_cap: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
    };
  };
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
}
