export const siteHeaderHeadings = {
  dashboard: "Dashboard",
  orders: "Order Management",
  customers: "Customers",
  coupons: "Coupon",
  categories: "Categories",
  transactions: "Transaction",
  reports: "Reports",
  addProducts: "Add Products",
  products: "Product List",
  admin: "Admin role",
};

// Dashboard Stats Data
export const dashboardStats = [
  {
    title: "Total Sales",
    subtitle: "Last 7 days",
    value: "$350K",
    label: "Sales",
    change: { value: "10.4%", isPositive: true },
    previousValue: "$235",
    showDetailsButton: true,
  },
  {
    title: "Total Orders",
    subtitle: "Last 7 days",
    value: "1,240",
    label: "Orders",
    previousValue: "1,100",
    change: { value: "14.4%", isPositive: true },
  },
  {
    title: "Total Customers",
    subtitle: "Last 7 days",
    value: "8,549",
    label: "Customers",
    previousValue: "7,890",
    change: { value: "8.3%", isPositive: true },
  },
];

// Recent Orders Data
export const recentOrders = [
  {
    id: "12345",
    customer: "John Doe",
    product: "Laptop Pro 15",
    amount: "$1,299",
    status: "Completed",
    date: "Dec 1, 2025",
  },
  {
    id: "12346",
    customer: "Jane Smith",
    product: "Wireless Mouse",
    amount: "$29",
    status: "Pending",
    date: "Dec 2, 2025",
  },
  {
    id: "12347",
    customer: "Bob Johnson",
    product: "USB-C Cable",
    amount: "$15",
    status: "Completed",
    date: "Dec 2, 2025",
  },
  {
    id: "12348",
    customer: "Alice Williams",
    product: "Mechanical Keyboard",
    amount: "$149",
    status: "Processing",
    date: "Dec 3, 2025",
  },
  {
    id: "12349",
    customer: "Charlie Brown",
    product: "Monitor 27inch",
    amount: "$399",
    status: "Completed",
    date: "Dec 3, 2025",
  },
];

// Top Products Data
export const topProducts = [
  {
    id: 1,
    name: "Laptop Pro 15",
    category: "Electronics",
    sales: 156,
    revenue: "$202,644",
    stock: 24,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    category: "Accessories",
    sales: 423,
    revenue: "$12,267",
    stock: 156,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Accessories",
    sales: 287,
    revenue: "$42,763",
    stock: 89,
  },
  {
    id: 4,
    name: "Monitor 27inch",
    category: "Electronics",
    sales: 198,
    revenue: "$79,002",
    stock: 45,
  },
  {
    id: 5,
    name: "USB-C Cable",
    category: "Accessories",
    sales: 891,
    revenue: "$13,365",
    stock: 234,
  },
];

// Customer Data
export const customersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    totalOrders: 12,
    totalSpent: "$2,450",
    status: "Active",
    joinDate: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    totalOrders: 8,
    totalSpent: "$1,890",
    status: "Active",
    joinDate: "Feb 20, 2024",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    totalOrders: 5,
    totalSpent: "$780",
    status: "Inactive",
    joinDate: "Mar 10, 2024",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    totalOrders: 15,
    totalSpent: "$3,200",
    status: "Active",
    joinDate: "Jan 5, 2024",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    totalOrders: 10,
    totalSpent: "$1,650",
    status: "Active",
    joinDate: "Apr 12, 2024",
  },
];

// Sales Chart Data
export const salesChartData = [
  { month: "Jan", sales: 45000, orders: 320 },
  { month: "Feb", sales: 52000, orders: 380 },
  { month: "Mar", sales: 48000, orders: 350 },
  { month: "Apr", sales: 61000, orders: 420 },
  { month: "May", sales: 55000, orders: 390 },
  { month: "Jun", sales: 67000, orders: 450 },
  { month: "Jul", sales: 72000, orders: 490 },
  { month: "Aug", sales: 68000, orders: 470 },
  { month: "Sep", sales: 75000, orders: 510 },
  { month: "Oct", sales: 82000, orders: 560 },
  { month: "Nov", sales: 78000, orders: 530 },
  { month: "Dec", sales: 89500, orders: 620 },
];

// Weekly Report Data
export const weeklyReportData = {
  thisWeek: {
    chartData: {
      customers: [
        { day: "Sun", value: 7000 },
        { day: "Mon", value: 7500 },
        { day: "Tue", value: 8200 },
        { day: "Wed", value: 7100 },
        { day: "Thu", value: 8800 },
        { day: "Fri", value: 8300 },
        { day: "Sat", value: 9100 },
      ],
      totalProducts: [
        { day: "Sun", value: 100 },
        { day: "Mon", value: 320 },
        { day: "Tue", value: 500 },
        { day: "Wed", value: 500 },
        { day: "Thu", value: 500 },
        { day: "Fri", value: 260 },
        { day: "Sat", value: 580 },
      ],
      stockProducts: [
        { day: "Sun", value: 350 },
        { day: "Mon", value: 360 },
        { day: "Tue", value: 380 },
        { day: "Wed", value: 370 },
        { day: "Thu", value: 400 },
        { day: "Fri", value: 390 },
        { day: "Sat", value: 410 },
      ],
      outOfStock: [
        { day: "Sun", value: 70 },
        { day: "Mon", value: 65 },
        { day: "Tue", value: 80 },
        { day: "Wed", value: 75 },
        { day: "Thu", value: 85 },
        { day: "Fri", value: 78 },
        { day: "Sat", value: 72 },
      ],
      revenue: [
        { day: "Sun", value: 15000 },
        { day: "Mon", value: 18000 },
        { day: "Tue", value: 28000 },
        { day: "Wed", value: 14000 },
        { day: "Thu", value: 35000 },
        { day: "Fri", value: 25000 },
        { day: "Sat", value: 30000 },
      ],
    },
    stats: {
      customers: "52k",
      totalProducts: "3.5k",
      stockProducts: "2.5k",
      outOfStock: "0.5k",
      revenue: "250k",
    },
  },
  lastWeek: {
    chartData: {
      customers: [
        { day: "Sun", value: 6500 },
        { day: "Mon", value: 7000 },
        { day: "Tue", value: 7800 },
        { day: "Wed", value: 6800 },
        { day: "Thu", value: 8000 },
        { day: "Fri", value: 7600 },
        { day: "Sat", value: 8300 },
      ],
      totalProducts: [
        { day: "Sun", value: 480 },
        { day: "Mon", value: 490 },
        { day: "Tue", value: 510 },
        { day: "Wed", value: 500 },
        { day: "Thu", value: 530 },
        { day: "Fri", value: 520 },
        { day: "Sat", value: 540 },
      ],
      stockProducts: [
        { day: "Sun", value: 320 },
        { day: "Mon", value: 330 },
        { day: "Tue", value: 350 },
        { day: "Wed", value: 340 },
        { day: "Thu", value: 370 },
        { day: "Fri", value: 360 },
        { day: "Sat", value: 380 },
      ],
      outOfStock: [
        { day: "Sun", value: 80 },
        { day: "Mon", value: 75 },
        { day: "Tue", value: 90 },
        { day: "Wed", value: 85 },
        { day: "Thu", value: 95 },
        { day: "Fri", value: 88 },
        { day: "Sat", value: 82 },
      ],
      revenue: [
        { day: "Sun", value: 12000 },
        { day: "Mon", value: 16000 },
        { day: "Tue", value: 22000 },
        { day: "Wed", value: 18000 },
        { day: "Thu", value: 25000 },
        { day: "Fri", value: 20000 },
        { day: "Sat", value: 24000 },
      ],
    },
    stats: {
      customers: "48k",
      totalProducts: "3.4k",
      stockProducts: "2.3k",
      outOfStock: "0.6k",
      revenue: "210k",
    },
  },
};

// Country Sales Data
export const countrySalesData = {
  totalUsers: "21.5K",
  usersPerMinute: [
    34, 52, 41, 68, 45, 62, 38, 55, 44, 70, 58, 48, 66, 52, 75, 62, 50, 58, 43,
    65,
  ],
  countries: [
    {
      countryCode: "US",
      name: "US",
      sales: "30k",
      progress: 65,
      change: 25.8,
      isPositive: true,
    },
    {
      countryCode: "BR",
      name: "Brazil",
      sales: "30k",
      progress: 45,
      change: 15.8,
      isPositive: false,
    },
    {
      countryCode: "AU",
      name: "Australia",
      sales: "25k",
      progress: 55,
      change: 35.8,
      isPositive: true,
    },
  ],
};

// Recent Transactions Data
export const recentTransactionsData = {
  transactions: [
    {
      no: 1,
      customerId: "#6545",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$64",
    },
    {
      no: 2,
      customerId: "#5412",
      orderDate: "01 Oct | 11:29 am",
      status: "Pending",
      amount: "$557",
    },
    {
      no: 3,
      customerId: "#6622",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$156",
    },
    {
      no: 4,
      customerId: "#6462",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$265",
    },
    {
      no: 5,
      customerId: "#6462",
      orderDate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$265",
    },
  ],
};

// Top Products Data
export const topProductsData = {
  products: [
    {
      name: "Apple iPhone 13",
      itemCode: "#FXZ-4567",
      price: "$999.00",
      image: "",
    },
    {
      name: "Nike Air Jordan",
      itemCode: "#FXZ-4567",
      price: "$72.40",
      image: "",
    },
    {
      name: "T-shirt",
      itemCode: "#FXZ-4567",
      price: "$35.40",
      image: "",
    },
    {
      name: "Assorted Cross Bag",
      itemCode: "#FXZ-4567",
      price: "$80.00",
      image: "",
    },
  ],
};

// Best Selling Product Data
export const bestSellingProductData = {
  products: [
    {
      name: "Apple iPhone 13",
      totalOrder: 104,
      status: "Stock",
      price: "$999.00",
      image: "",
    },
    {
      name: "Nike Air Jordan",
      totalOrder: 56,
      status: "Stock out",
      price: "$999.00",
      image: "",
    },
    {
      name: "T-shirt",
      totalOrder: 266,
      status: "Stock",
      price: "$999.00",
      image: "",
    },
    {
      name: "Cross Bag",
      totalOrder: 506,
      status: "Stock",
      price: "$999.00",
      image: "",
    },
  ],
};

// Add New Product Data
export const addNewProductData = {
  categories: [
    { name: "Electronic", icon: "" },
    { name: "Fashion", icon: "" },
    { name: "Home", icon: "" },
  ],
  products: [
    { name: "Smart Fitness Tracker", price: "$39.99", image: "" },
    { name: "Leather Wallet", price: "$19.99", image: "" },
    { name: "Electric Hair Trimmer", price: "$34.99", image: "" },
  ],
};
