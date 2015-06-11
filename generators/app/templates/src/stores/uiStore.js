/**
 * uiStore
 * Store state regarding UI (header, sidebar, etc) changes
 */

import Reflux from "reflux";

import uiActions from "actions/uiActions";

const uiStore = Reflux.createStore({
  // Listen to all uiActions
  listenables: uiActions,

  onToggleSidebar() {
    this.trigger({ toggleSidebar: true });
  }
});

export default uiStore;
