import CreateUser from "@src/pages/CreateUser/CreateUser";
import LoginPage from "@src/pages/LoginPage/LoginPage";
import MainPage from "@src/pages/MainPage/MainPage";
import UpdateBox from "@src/pages/UpdateBox/UpdateBox";

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
    path: "/update-box",
    page: <UpdateBox text="123" />,
  },
];

export { routerMap };
