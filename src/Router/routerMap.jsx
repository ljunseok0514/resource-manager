import CreateUser from "@src/pages/CreateUser/CreateUser";
import LoginPage from "@src/pages/LoginPage/LoginPage";
import MainPage from "@src/pages/MainPage/MainPage";
import NewBox from "@src/pages/NewBox/NewBox";

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
  {
    auth: "common",
    path: "/new-box",
    page: <NewBox />,
  },
];

export { routerMap };
