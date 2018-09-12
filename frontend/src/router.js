import React from "react";
import { Route } from "react-router-dom";
import Routes from "./routes";

const flattenRoutes = mapping => {
  mapping = mapping || {};
  for (let route of Routes) {
    if (route.children) {
      for (let child of route.children) {
        mapping[child.path] = child.component;
      }
    } else {
      mapping[route.path] = route.component;
    }
  }
  return mapping;
};

const flatComponentMapping = flattenRoutes();

const BaseRouter = () => (
  <div>
    {Object.keys(flatComponentMapping).map(path => {
      return (
        <Route
          exact
          key={path}
          path={path}
          component={flatComponentMapping[path]}
        />
      );
    })}
  </div>
);

export default BaseRouter;
