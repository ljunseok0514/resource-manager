import { routerMap } from "@src/Router/routerMap";
import { Link } from "react-router-dom";
import ReactRouter from "./Router/ReactRouter";

function App() {
  return (
    <ReactRouter
      auth="common"
      routerMap={routerMap}
      wrongAccessPage={<></>}
      notFoundPage={<></>}
      errorPage={<div>Error Page</div>}
    >
      {/* {routerMap.map(({ path, page }) => {
        return <Link to={path}>{page}</Link>;
      })} */}
      <></>
    </ReactRouter>
  );
}

export default App;
