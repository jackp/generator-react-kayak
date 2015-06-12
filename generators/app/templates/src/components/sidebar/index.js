/**
 * Sidebar
 * App sidebar
 */
import React from "react";
import Reflux from "reflux";
import { LeftNav, MenuItem, Snackbar } from "material-ui";

import uiStore from "stores/uiStore";

let menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: "Resources" },
  {
    type: MenuItem.Types.LINK,
    payload: "https://facebook.github.io/react/",
    text: "React",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "https://github.com/rackt/react-router",
    text: "React Router",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "https://github.com/spoike/refluxjs",
    text: "Reflux",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "http://material-ui.com/",
    text: "Material UI",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "http://webpack.github.io/",
    text: "Webpack",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "https://facebook.github.io/jest/",
    text: "Jest",
    target: "_blank"
  }
];

const Sidebar = React.createClass({
  mixins: [Reflux.listenTo(uiStore, "toggleSidebar")],
  render() {
    return (
      <aside>
        <LeftNav ref="sidebar" docked={false} menuItems={menuItems} />
        <Snackbar ref="sidebarNotice" message="This sidebar was toggled via a Reflux action. Check out that source code!" />
      </aside>
    );
  },
  toggleSidebar(payload) {
    if(payload.toggleSidebar) {
      this.refs.sidebar.toggle();
      this.refs.sidebarNotice.show();
    }
  }
});

export default Sidebar;
