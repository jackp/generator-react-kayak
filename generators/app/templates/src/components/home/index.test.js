jest.dontMock("../home");

describe("HomeView", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;

  var HomeView = require("../home");

  it("is defined as a React component", function() {
    var component = <HomeView />;

    expect(TestUtils.isElement(component)).toBeTruthy();
  });
});
