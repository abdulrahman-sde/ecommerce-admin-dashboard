export type WeeklyReportData = {
  thisWeek: {
    chartData: {
      customers: { day: string; value: number }[];
      totalProducts: { day: string; value: number }[];
      stockProducts: { day: string; value: number }[];
      outOfStock: { day: string; value: number }[];
      revenue: { day: string; value: number }[];
    };
    stats: {
      customers: string;
      totalProducts: string;
      stockProducts: string;
      outOfStock: string;
      revenue: string;
    };
  };
  lastWeek: {
    chartData: {
      customers: { day: string; value: number }[];
      totalProducts: { day: string; value: number }[];
      stockProducts: { day: string; value: number }[];
      outOfStock: { day: string; value: number }[];
      revenue: { day: string; value: number }[];
    };
    stats: {
      customers: string;
      totalProducts: string;
      stockProducts: string;
      outOfStock: string;
      revenue: string;
    };
  };
};

export type WeeklyReportProps = {
  data: WeeklyReportData;
};

export type CountrySalesData = {
  totalUsers: string;
  usersPerMinute: number[];
  countries: {
    countryCode: string;
    name: string;
    sales: string;
    progress: number;
    change: number;
    isPositive: boolean;
  }[];
};

export type CountrySalesProps = {
  data: CountrySalesData;
};

export type RecentTransactionsData = {
  transactions: {
    no: number;
    customerId: string;
    orderDate: string;
    status: string;
    amount: string;
  }[];
};

export type RecentTransactionsProps = {
  data: RecentTransactionsData;
};

export type TopProductsData = {
  products: {
    name: string;
    itemCode: string;
    price: string;
    image: string;
  }[];
};

export type TopProductsProps = {
  data: TopProductsData;
};

export type BestSellingProductData = {
  products: {
    name: string;
    totalOrder: number;
    status: string;
    price: string;
    image: string;
  }[];
};

export type BestSellingProductProps = {
  data: BestSellingProductData;
};

export type AddNewProductData = {
  categories: {
    name: string;
    icon: string;
  }[];
  products: {
    name: string;
    price: string;
    image: string;
  }[];
};

export type AddNewProductProps = {
  data: AddNewProductData;
};
