import CreateUser from "@src/pages/CreateUser/CreateUser";
import LoginPage from "@src/pages/LoginPage/LoginPage";
import MainPage from "@src/pages/MainPage/MainPage";
import ResourceDetailPage from "@src/pages/ResourceDetailPage/ResourceDetailPage";
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
    path: "/resource-detail/:id",
    page: <ResourceDetailPage />,
  },
  {
    auth: "common",
    path: "/update-box",
    page: <UpdateBox text="123" />,
  },
];

export { routerMap };
