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

export type StatCardData = {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
  showMenu?: boolean;
};

export type OrderTableItem = {
  id: string;
  product: {
    name: string;
    icon: string;
  };
  date: string;
  price: number;
  payment: {
    status: string;
    isPaid: boolean;
  };
  status: string;
};

export type OrdersTableProps = {
  data: OrderTableItem[];
};

export type CustomerOverviewData = {
  thisWeek: {
    chartData: {
      activeCustomers: { day: string; value: number }[];
      repeatCustomers: { day: string; value: number }[];
      shopVisitor: { day: string; value: number }[];
      conversionRate: { day: string; value: number }[];
    };
    stats: {
      activeCustomers: string;
      repeatCustomers: string;
      shopVisitor: string;
      conversionRate: string;
    };
  };
  lastWeek: {
    chartData: {
      activeCustomers: { day: string; value: number }[];
      repeatCustomers: { day: string; value: number }[];
      shopVisitor: { day: string; value: number }[];
      conversionRate: { day: string; value: number }[];
    };
    stats: {
      activeCustomers: string;
      repeatCustomers: string;
      shopVisitor: string;
      conversionRate: string;
    };
  };
};

export type CustomerOverviewProps = {
  data: CustomerOverviewData;
};

export type CustomerTableItem = {
  id: string;
  name: string;
  phone: string;
  orderCount: number;
  totalSpend: number;
  status: string;
};

export type CustomerTableProps = {
  data: CustomerTableItem[];
};

export type CustomerDetail = {
  id: string;
  name: string;
  avatar: string;
  country: string;
  orderCount: number;
  customerSince: string;
  rating: number;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  email: string;
  phone: string;
  notes: string;
  orders: {
    id: string;
    date: string;
    status: string;
    price: number;
  }[];
  tags: string[];
};

// Category Types
export type Category = {
  id: string;
  name: string;
  image: string;
};

export type CategoryCardProps = {
  category: Category;
};

export type ProductListItem = {
  id: number;
  name: string;
  category: string;
  image: string;
  inventory: string;
  color: string;
  price: string;
  rating: string;
  inStock: boolean;
};

export type CategoryProduct = {
  id: number;
  name: string;
  image: string;
};

export type CategoryData = {
  id?: string;
  name: string;
  image: string;
  isVisible: boolean;
  products: CategoryProduct[];
};

export type EditCategoryProps = {
  initialData?: CategoryData;
};

export type TransactionStat = {
  title: string;
  value: string;
  change: { value: string; isPositive: boolean };
  subtitle: string;
};

export type PaymentCard = {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  status: string;
  transactions: number;
  revenue: string;
};

export type TransactionHistory = {
  id: number;
  customerId: string;
  name: string;
  date: string;
  total: string;
  method: string;
  status: string;
};

export type CustomerGrowthData = {
  month: string;
  returningCustomers: number;
  newCustomers: number;
}[];

export type CustomerGrowthProps = {
  data: CustomerGrowthData;
};

export type VisitorStatsItem = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
};

export type VisitorStatsProps = {
  data: VisitorStatsItem[];
};
