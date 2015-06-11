jest.dontMock("./App");

describe("App", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;

  var App = require("./App");

  it("is defined as a React component", function() {
    var component = <App />;

    expect(TestUtils.isElement(component)).toBeTruthy();
  });
});
