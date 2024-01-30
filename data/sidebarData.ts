import {
  ShoppingBagIcon,
  UserCircleIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
export const sidebarData = [
  {
    id: 1,
    title: "E-commerce",
    icon: ShoppingBagIcon,
    links: [
      {
        text: "Product",
        url: "http://localhost:3000/admin/products",
      },

      {
        text: "Catagories",
        url: "http://localhost:3000/admin/categories",
      },
      {
        text: "subcatagories",
        url: "http://localhost:3000/admin/subcategories",
      },
      {
        text: "Orders",
        url: "http://localhost:3000/admin/orders",
      },
      {
        text: "Order details",
        url: "http://localhost:3000/admin/order_details",
      },
      {
        text: "Brands",
        url: "http://localhost:3000/admin/brands",
      },
    ],
  },
  {
    id: 2,
    title: "Customers",
    icon: UserCircleIcon,
    links: [
      {
        text: "Customers",
        url: "http://localhost:3000/admin/customers",
      },
    ],
  },
  {
    id: 3,
    title: "Discount",
    icon: TicketIcon,
    links: [
      {
        text: "Coupons",
        url: "http://localhost:3000/admin/order_details",
      },
    ],
  },
];
