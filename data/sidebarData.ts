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
        url: "/admin/products",
      },

      {
        text: "Catagories",
        url: "/admin/categories",
      },
      {
        text: "subcatagories",
        url: "/admin/subcategories",
      },
      {
        text: "Orders",
        url: "/admin/orders",
      },
      {
        text: "Order details",
        url: "/admin/order_details",
      },
      {
        text: "Brands",
        url: "/admin/brands",
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
        url: "/admin/customers",
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
        url: "/admin/coupons",
      },
    ],
  },
];
