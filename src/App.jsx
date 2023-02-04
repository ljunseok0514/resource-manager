import { routerMap } from "@src/Router/routerMap";
import { Link } from "react-router-dom";
import Template from "./components/Template/Template";
import ReactRouter from "./Router/ReactRouter";
import "./initial.css";

function App() {
  return (
    <ReactRouter
      auth="common"
      routerMap={routerMap}
      wrongAccessPage={<>403</>}
      notFoundPage={<>404</>}
      errorPage={<div>Error Page</div>}
      addedElement={(page) => {
        return <Template>{page}</Template>;
      }}
    >
      {/* {routerMap.map(({ path, page }) => {
        return <Link to={path}>{page}</Link>;
      })} */}
      <></>
    </ReactRouter>
  );
}

export default App;
