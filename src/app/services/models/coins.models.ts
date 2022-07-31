export interface ICoinResponse {
  id: string;
  symbol: string;
  name: string;
}

export interface ICoinDollarTimeResponse {
  market_caps: number[][];
  prices: number[][];
  total_volumes: number[][];
}

export interface ICoinDetailResponse {
  id: string;
  symbol: string;
  name: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  genesis_date: string;
}
