
import Index from "views/Index.js";
import Customer from "views/examples/Customer.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
import ViewCustomer from "views/examples/ViewCustomer.js";
// import Icons from "views/examples/Icons.js";
import AddCredit from "views/examples/AddCredit.js"
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  {
    path: "/add-customer",
    name: "Add Customer",
    icon: "ni ni-single-02 text-yellow",
    component: <Customer />,
    layout: "/admin",
  },
  {
    path: "/view-customer",
    name: "View Customer",
    icon: "ni ni-bullet-list-67 text-red",
    component: <ViewCustomer />,
    layout: "/admin",
  },
  {
    path: "/add-credit",
    name: "Add Credit Amount",
    icon: "ni ni-money-coins",
    component: <AddCredit />,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: <Login />,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];
export default routes;