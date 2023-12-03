export interface iStacklineData {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: iStacklineReviews[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: iStacklineSales[];
}

export interface iStacklineReviews {
  customer: string;
  review: string;
  score: number;
}

export interface iStacklineSales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}
