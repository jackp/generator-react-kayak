/**
 * App
 * Main application structure
 */

import React from "react";
import { RouteHandler } from "react-router";
<% if (options.styleFramework === "material") { %>import { Styles } from "material-ui";
<% } %><% if (options.showExamples) { %>
import Header from "components/header";
import Sidebar from "components/sidebar";<% } %>

require("normalize.css/normalize.css");<% if (options.styleFramework === "material") { %>
require("materialize-css/bin/materialize.css");<% } %>
require("styles/main.scss");

const App = React.createClass({
  render() {
    return (
      <div><% if (options.showExamples) { %>
        <Header />
        <Sidebar /><% } %>
        <main>
          <RouteHandler {...this.props} />
        </main>
      </div>
    );
  }<% if (options.styleFramework === "material") { %>,
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: new Styles.ThemeManager().getCurrentTheme()
    };
  }<% } %>
});

export default App;
