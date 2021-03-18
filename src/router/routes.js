import Home from "../views/Home";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import NotFound from "../views/NotFound";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];
