export interface iStacklineData {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    score: 5;
  }[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: iStacklineSales[];
}

export interface iStacklineSales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}
