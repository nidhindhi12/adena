import { BiSolidDashboard } from "react-icons/bi";
import { PiShoppingBagFill } from "react-icons/pi";
import { MdProductionQuantityLimits, MdCategory,MdFestival } from "react-icons/md";
import { LuUsers, LuCircleUser, LuMessageSquareText } from "react-icons/lu";
import { GiMetalBar } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";

//#region signup field
export const signupfield = [
  [
    { type: "text", placeholder: "First Name", name: "firstname" },
    { type: "text", placeholder: "Last Name", name: "lastname" }
  ],
  [
    { type: "text", placeholder: "Phone Number", name: "phonenumber" },
    { type: "password", placeholder: "Password", name: "password" }
  ],
  [
    { type: "email", placeholder: "Email Id", name: "email", }
  ]
];
//#endregion
//#region loginflied 
export const loginfield = [
  [
    { type: "email", placeholder: "Email Id", name: "email" }
  ],
  [
    { type: "password", placeholder: "Password", name: "password" }
  ]
]
//#endregion
//#region sidebar
export const adminnavbar = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: BiSolidDashboard
  },
  {
    name: 'Employee',
    path: '/admin/employee',
    icon: LuUsers
  },
  {
    name: 'Orders',
    path: '/admin/orders',
    icon: PiShoppingBagFill
  },
  {
    name: 'Products',
    path: '/admin/products',
    icon: MdProductionQuantityLimits
  },
  {
    name: 'Category',
    path: '/admin/category',
    icon: MdCategory
  },
  {
    name: 'Metal',
    path: '/admin/metal',
    icon: GiMetalBar
  },
  {
    name:'Ocassion',
    path:'/admin/ocassion',
    icon:MdFestival
  }
]
//#endregion
//#region  admindropdown
export const admindropdown = [
  {
    name: 'My profile',
    path: '/admin',
    icon: LuCircleUser
  },
  {
    name: 'My tasks',
    path: '/admin',
    icon: FaTasks
  },
  {
    name: 'My messages',
    path: '/admin',
    icon: LuMessageSquareText
  },

]
//#endregion

//#region customer service
export const customerservice = [
  {
    name: "Faq",
    path: '/'
  },
  {
    name: "Size guide",
    path: '/'
  },
  {
    name: "Shipping",
    path: '/'
  },
  {
    name: "Order status",
    path: '/'
  },
  {
    name: "Exchange",
    path: '/'
  }
]
//#endregion

// about us

export const aboutus = [
  {
    name: "Our Shops",
    path: '/'
  },
  {
    name: "Size guide",
    path: '/'
  },
  {
    name: "Shipping",
    path: '/'
  },
  {
    name: "Order Status",
    path: "/"
  },
  {
    name: "exchanges",
    path: '/'
  }
]

