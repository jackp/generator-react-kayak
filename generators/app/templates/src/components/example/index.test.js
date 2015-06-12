jest.dontMock("../example");

describe("ExampleView", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;

  var ExampleView = require("../example");

  it("is defined as a React component", function() {
    var component = <ExampleView />;

    expect(TestUtils.isElement(component)).toBeTruthy();
  });
});
