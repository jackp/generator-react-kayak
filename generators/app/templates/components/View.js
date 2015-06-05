/**
 * View
 * Wrapper for all main views
 * Adds support for setting title using react-document-title
 */

import React from "react";
import DocumentTitle from "react-document-title";

const View = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <DocumentTitle title={this.props.title}>
        <section id={this.props.name}>{this.props.children}</section>
      </DocumentTitle>
    );
  }
});

export default View;
