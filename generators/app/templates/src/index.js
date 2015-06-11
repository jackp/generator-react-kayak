/**
 * Application entry point
 */

// Dependencies
import React from "react";
import Router, { Route, DefaultRoute, NotFoundRoute } from "react-router";
<% if (options.styleFramework === "material") { %>import injectTapEventPlugin from "react-tap-event-plugin";
<% } %>
import App from "components/App";
import HomeView from "components/home";
import Error404View from "components/errors/404";
import ExampleView from "components/example";

// Route definitions
const routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={HomeView} name="home" />
    <Route handler={ExampleView} name="example" path="/example" />
    <NotFoundRoute handler={Error404View} />
  </Route>
);

// Create React Router
const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation,
  scrollBehavior: Router.ScrollToTopBehavior
});
<% if (options.styleFramework === "material") { %>
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
<% } %>
// Start router, render React components to DOM
router.run((Handler, state) => {
  React.render(<Handler params={state.params} />, document.getElementById("application"));
});

