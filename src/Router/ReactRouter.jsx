import { Routes, Route, BrowserRouter } from "react-router-dom";

import authenticator from "./authenticator";
import ErrorBoundary from "@src/ErrorBoundary/ErrorBoundary";

function ReactRouter({
  auth,
  routerMap,
  wrongAccessPage,
  notFoundPage,
  errorPage,
  children,
  addedElement = (page) => page,
}) {
  return (
    <ErrorBoundary fallback={errorPage}>
      <BrowserRouter>
        <Routes>
          {routerMap.map(({ auth: pageAuth, path, page }) => {
            const [certifiedPage, cert] = authenticator({
              auth,
              pageAuth,
              wrongAccessPage,
              page,
            });

            const render = addedElement(
              certifiedPage,
              cert === 0 ? "wrongAccess" : pageAuth
            );

            return <Route path={path} element={render} key={path} />;
          })}
          <Route path="*" element={addedElement(notFoundPage, "notFound")} />
        </Routes>
        {children}
      </BrowserRouter>
    </ErrorBoundary>
  );
}

ReactRouter.defaultProps = {
  addedElement: (page) => page,
};

export default ReactRouter;
