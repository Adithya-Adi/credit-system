
import Customer from "views/examples/Customer.js";
import ViewCustomer from "views/examples/ViewCustomer.js";
import AddCredit from "views/examples/AddCredit.js";
import ViewCredits from "views/examples/VIewCredits.js";

var routes = [
  {
    path: "/index",
    name: "Add Customer",
    icon: "ni ni-tv-2 text-primary",
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
    name: "Update Credit",
    icon: "ni ni-money-coins",
    component: <AddCredit />,
    layout: "/admin",
  },
  {
    path: "/view-credit",
    layout: "/admin",
    component: <ViewCredits />,
  },
];
export default routes;
