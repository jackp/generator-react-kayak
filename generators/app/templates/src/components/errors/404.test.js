jest.dontMock("./404");

describe("404", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;

  var Error404View = require("./404");

  it("is defined as a React component", function() {
    var component = <Error404View />;

    expect(TestUtils.isElement(component)).toBeTruthy();
  });
});
