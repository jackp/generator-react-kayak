/**
 * HomeView
 * /
 */
import React from "react";

import View from "components/View";

// View-specific styles
require("./home.scss");

const HomeView = React.createClass({
  render() {
    return (
      <View title="Home" name="home">
        <h1>Home View</h1>
      </View>
    );
  }
});

export default HomeView;
