import { ChevronDownIcon, ShoppingBagIcon , UserCircleIcon} from "@heroicons/react/24/outline"
export const sidebarData = [
    {
        id: 1,
        title: "E-commerce",
        icon: ShoppingBagIcon,
        dropDown: ChevronDownIcon,
        links : [
            "Product",
            "Catagories",
            "subcatagories",
            "Orders",
            "Brands",
            "Ca"
        ],
    },
    {
        id: 2,
        title: "Customers",
        icon: UserCircleIcon,
        dropDown: ChevronDownIcon,
        links : [
            "Product",
            "Add new customer",
        ],
    },
]