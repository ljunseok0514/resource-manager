import CreateUser from "@src/pages/CreateUser/CreateUser";
import LoginPage from "@src/pages/LoginPage/LoginPage";
import MainPage from "@src/pages/MainPage/MainPage";

const routerMap = [
  {
    auth: "common",
    path: "/",
    page: <MainPage />,
  },
  {
    auth: "common",
    path: "/login",
    page: <LoginPage />,
  },
  {
    auth: "common",
    path: "/create-user",
    page: <CreateUser />,
  },
];

export { routerMap };
