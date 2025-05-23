import { BiSolidDashboard } from "react-icons/bi";
import { PiShoppingBagFill } from "react-icons/pi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { LuUsers, LuCircleUser, LuMessageSquareText } from "react-icons/lu";
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

