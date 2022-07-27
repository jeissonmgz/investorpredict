export interface ICoin {
  id: string;
  symbol: string;
  name: string;
}

export interface ICoinDollarTime {
  market_caps: number[][];
  prices: number[][];
  total_volumes: number[][];
}

export interface ICoinDetail {
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
