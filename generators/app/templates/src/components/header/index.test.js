jest.dontMock("../home");

describe("Header", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;

  var Header = require("../header");

  it("is defined as a React component", function() {
    var component = <Header />;

    expect(TestUtils.isElement(component)).toBeTruthy();
  });
});
