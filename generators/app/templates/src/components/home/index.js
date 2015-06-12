/**
 * HomeView
 * /
 */
import React from "react";<% if(options.showExamples) { %>
import { Link } from "react-router";<% } %>
import View from "components/View";

// View-specific styles
require("./home.scss");

const HomeView = React.createClass({
  render() {
    return (
      <View title="Home" name="home">
        <h1>Home View</h1><% if(options.showExamples) { %>
        <Link to="example">Check out some examples</Link><% } %>
      </View>
    );
  }
});

export default HomeView;
