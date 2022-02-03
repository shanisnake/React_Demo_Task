export interface fundsInitialState {
  mutualFund: null | Array<fundOjectType>;
  exchangeTradedFund: null | Array<fundOjectType>;
}

export interface fundOjectType {
  scrip: string;
  quantity: number;
  price: string;
  avgCost: string;
  investedAmount: string;
  portfolioValue: number;
  unRealizedPL: string;
  returnValue: number;
}
